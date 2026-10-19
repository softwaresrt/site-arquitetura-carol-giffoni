import {Routes,Route} from 'react-router-dom';
import {Layout} from './components/Layout';
import Home from './pages/Home';
import {Portfolio,ProjectDetail,StudioPage,ContactPage,PrivacyPage,NotFound} from './pages/InnerPages';
export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/projetos" element={<Portfolio/>}/><Route path="/projetos/:slug" element={<ProjectDetail/>}/><Route path="/escritorio" element={<StudioPage/>}/><Route path="/contato" element={<ContactPage/>}/><Route path="/politica-de-privacidade" element={<PrivacyPage/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>}
