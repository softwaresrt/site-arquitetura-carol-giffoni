/** Optional Vercel Serverless Function. Requires SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.
 *  Intended Supabase table: contact_leads (see README and supabase-schema.sql).
 *  Without valid configuration, always returns 503, never claims persistence.
 */
type Incoming={project?:string;city?:string;area?:string;budget?:string;name?:string;phone?:string;email?:string;message?:string;consent?:boolean;website?:string};
function clean(s:unknown,max=500){return typeof s==='string'?s.trim().slice(0,max):''}
export default async function handler(req:{method?:string;body?:Incoming|string},res:{status:(n:number)=>{json:(obj:Record<string,unknown>)=>void};setHeader:(key:string,value:string)=>void}){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST')return res.status(405).json({error:'Método não permitido'});
 let data:Incoming;try{data=typeof req.body==='string'?JSON.parse(req.body):req.body||{}}catch{return res.status(400).json({error:'JSON inválido'})}
 if(clean(data.website))return res.status(200).json({ok:true});
 const name=clean(data.name,120),email=clean(data.email,160),phone=clean(data.phone,40),project=clean(data.project,100),city=clean(data.city,150);
 if(name.length<2||!/^\S+@\S+\.\S+$/.test(email)||phone.replace(/\D/g,'').length<10||!city||!data.consent)return res.status(400).json({error:'Preencha os campos obrigatórios corretamente.'});
 const url=process.env.SUPABASE_URL,key=process.env.SUPABASE_SERVICE_ROLE_KEY;
 if(!url||!key)return res.status(503).json({error:'Armazenamento de leads ainda não configurado.'});
 try{
  const response=await fetch(`${url.replace(/\/$/,'')}/rest/v1/contact_leads`,{method:'POST',headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({name,email,phone,project,city,area:clean(data.area),budget:clean(data.budget),message:clean(data.message,2500),consent:true})});
  if(!response.ok)throw new Error(`Supabase respondeu ${response.status}`);
  return res.status(201).json({ok:true});
 }catch{return res.status(502).json({error:'Não foi possível registrar a mensagem.'})}
}
