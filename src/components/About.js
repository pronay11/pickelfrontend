import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import img from '../images/pronay.jpeg';
import img1 from '../images/men01.jpeg';
import vdo from '../images/mangoachar.mp4';


const About = () => {
    useEffect(() => {
        
        Aos.init({duration:2000});
    }, [])
    return (
        <>
          <div className="grid-all">
              <div className="grid-tittle">ম্যানেজার</div>
              <hr/>
            <div className="grids">        
                <div data-aos="slide-right" className="box">
                    <p>“আমি একবার একটি ইঞ্জিনিয়ারিং প্রকল্পে কাজ করেছি যার মধ্যে পাহাড় এবং তাদের কাছাকাছি রাস্তাঘাট সম্পর্কে ভবিষ্যদ্বাণী করা ছিল। এই অভিযোজনগুলির সাহায্যে, আমি প্রকল্পটি কতটা চ্যালেঞ্জিং সত্ত্বেও শুরুতে মনে হয়েছিল তা সত্ত্বেও সম্পন্ন করতে সক্ষম হয়েছিলাম। ”</p>
                </div>
                <div data-aos="fade-up" className="box">
                    <img src={img} alt="No Image"/>
                </div>
            </div>

            <div className="grid-tittle">আচার তৈরি ভিডিও</div>
              <hr/>
            <div className="grids">
                
                <div data-aos="fade-up" className="box1">
                   <video autoPlay loop muted height="240px" width="480px" controls>
                       <source src={vdo} type="video/mp4"/>
                   </video>
                </div>
                <div data-aos="slide-right" className="box">
                <p>কড়াইতে জিরা, মৌরি টেলে নিয়ে গুঁড়ো করে নিতে হবে। এবার মেথি আর পাঁচফোড়ন টেলে নিয়ে গুঁড়ো করে নিতে হবে। কড়াইতে তেল গরম করে 
                    শুকনো লঙ্কা, তেজ পাতা ফোড়ন দিয়ে আম গুলো দিয়ে লবণ হলুদ দিয়ে কড়াই ঢাকা দিতে হবে।</p>
                </div>
            </div>

            <div className="grid-tittle">গ্রাহক পর্যালোচনা</div>
              <hr/>
            <div className="grids">
                <div data-aos="fade-up" className="box">
                <p>“এর আগে মনেহয় না আর কোনো আচারের জন্য দর্শকেরা আমাকে এতো রিকোয়েস্ট করেছেন। আমিও মাঝে মাঝে চিন্তা করি যে এত্ত সহজ একটা রেসিপি কেনো আমার দর্শকদের সাথে শেয়ার করছি....“</p>
                </div>
                <div data-aos="slide-right" className="box">
                   <img src={img1} alt="No Image"/>
                </div>
            </div>

          </div>
            
        </>
    )
}

export default About
