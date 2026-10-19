import {useEffect} from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function useSmoothScroll(){useEffect(()=>{
 const query=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(query.matches||window.matchMedia('(pointer:coarse)').matches)return;
 const lenis=new Lenis({duration:1.16,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});
 const update=()=>ScrollTrigger.update();lenis.on('scroll',update);
 const tick=(time:number)=>lenis.raf(time*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);
 return()=>{gsap.ticker.remove(tick);lenis.off('scroll',update);lenis.destroy()};
},[])}
