
import './App.css';
import Header from './component/header';
import HeroImg from "./img/hero-img-right.png";
import hero_shape_1 from "./img/hero-shape-1.png";
import hero_shape_2 from "./img/hero-shape-2.png";
import hero_shape_3 from "./img/hero-shape-3.png";
import hero_shape_4 from "./img/hero-shape-4.png";
import team_1 from "./img/team-1.png";
import team_2 from "./img/team-2.png";
import team_3 from "./img/team-3.png";
import team_4 from "./img/team-4.png";
import icon_1 from "./img/icon-1.png";
import icon_2 from "./img/icon-2.png";
import icon_3 from "./img/icon-3.png";
import features_img from "./img/features-img.png";
import features_2 from "./img/features-2.png";
import clock from "./img/clock.png";
import features_in_img from "./img/features-in-img.png";
import Integrate_img_1 from "./img/Integrate-img-1.png";
import Integrate_img_2 from "./img/Integrate-img-2.png";
import Integrate_img_3 from "./img/Integrate-img-3.png";
import Integrate_img_4 from "./img/Integrate-img-4.png";
import Integrate_img_5 from "./img/Integrate-img-5.png";
import save_time from "./img/save-time.png";


function App() {
  return (
    <>
      <Header />
      <div className="relative h-full	pb-48">
        <div className=" absolute top-0 h-full md:max-w-[1000px]  md:bg-[-550px] xl:max-w-[1150px]  xl:bg-[-400px]  2xl:max-w-[1316px] w-full -z-10 bg-[url('./img/hero-bg.png')] bg-cover bg-no-repeat  2xl:bg-[00px]"></div>
        <div className='xl:container container-[100%] pt-72	mx-auto px-4'>
          <div className='flex'>
            <div className='w-[45%] relative px-5'>
              <img src={hero_shape_1} className='animate-ping  absolute left-[300px] z-0 top-[-20px]'></img>
              <img src={hero_shape_2} className='animate-spin	absolute right-[0px] z-0 '></img>
              <img src={hero_shape_3} className='animate-bounce	 absolute right-[60px] top-1/3 z-0 '></img>
              <img src={hero_shape_4} className='animate-spin	absolute right-[70px] bottom-20 z-0 '></img>


              <div className='z-10 relative'>
                <div className='bg-white py-2.5 px-2 rounded-lg text-xl inline-block'>👋 Welcome to TeamFlow</div>
                <div className='mt-4'>
                  <h1 className='text-white font-extrabold	text-[64px] leading-tight	'>Work the way that works for you</h1>
                  <hr className='w-16	bg-[#3ADAD9] h-1.5 my-10'></hr>
                  <p className='text-[30px] font-normal text-white'>Create, Build, Collaborate and ship products <br></br> very faster </p>
                  <button type="button" className="mt-10 bg-[#FFCA1D] hover:bg-[#000]/90 focus:ring-4 focus:ring-[#fff]/50  focus:text-white focus:outline-none font-medium rounded-xl text-[26px]  px-7 py-3 2xl:px-12 2xl:py-4 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50  text-[24px] font-semibold	text-[#1F1F1F]">Get Started</button>
                </div>
              </div>
            </div>
            <div className='w-[55%] px-5'>
              <img src={HeroImg} className='max-w-full'></img>
            </div>
          </div>
        </div>
      </div>

      <div className='py-32'>
        <div className='xl:container container-[100%] mx-auto px-4'>
          <div className='flex items-center'>
            <div className='w-[45%]  px-5'>
              <hr className='w-16	bg-[#FFCA1D] h-1.5 my-3'></hr>
              <h2 className='text-[30px]	font-bold'>See why over 100,000 teams choose TeamFlow.com
              </h2>
            </div>
            <div className='w-[55%] px-5'>
              <div className=' flex-wrap	2xl:-mx-8 xl:-mx-5 flex items-center justify-between'>
                <img src={team_1} className='2xl:px-8 xl:px-5 w-1/4 px-3 max-w-full'></img>
                <img src={team_2} className='2xl:px-8 xl:px-5 w-1/4 px-3 max-w-full'></img>
                <img src={team_3} className='2xl:px-8 xl:px-5 w-1/4 px-3 max-w-full'></img>
                <img src={team_4} className='2xl:px-8 xl:px-5 w-1/4 px-3 max-w-full'></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pb-32'>
        <div className='xl:container container-[100%] mx-auto px-4'>
          <div className='text-center'>
            <h2 className='text-5xl	font-semibold	'>What you <span className='text-[#FFCA1D]'> can do? </span>  </h2>
          </div>
          <div className='flex flex-wrap -mx-11 mt-24'>
            <div className='w-1/3 text-center px-11'>
              <div className='w-[102px] mb-12 rounded-3xl h-[102px] bg-[#fed369] flex items-center justify-center	mx-auto'>
                <img src={icon_1}></img>
              </div>
              <div className=''>
                <h3 className='mb-6 text-2xl text-[#2B3377] font-semibold'>Business Planning</h3>
                <p className='text-xl leading-9	text-[#585858]'>Our Business Plan is a written document describing a company’s core business activities.</p>
              </div>
            </div>

            <div className='w-1/3 text-center px-11'>
              <div className='w-[102px] mb-12 rounded-3xl h-[102px] bg-[#3adad9] flex items-center justify-center	mx-auto'>
                <img src={icon_2}></img>
              </div>
              <div className=''>
                <h3 className='mb-6 text-2xl text-[#2B3377] font-semibold'>Financial Planning</h3>
                <p className='text-xl leading-9	text-[#585858]'>Our expert team sensible decision about their money, to ensure they achieve the life goals. A financial plan.</p>
              </div>
            </div>

            <div className='w-1/3 text-center px-11'>
              <div className='w-[102px] mb-12 rounded-3xl h-[102px] bg-[#fd9b79] flex items-center justify-center	mx-auto'>
                <img src={icon_3}></img>
              </div>
              <div className=''>
                <h3 className='mb-6 text-2xl text-[#2B3377] font-semibold'>Market Analysis</h3>
                <p className='text-xl leading-9	text-[#585858]'>A market analysis is a quantitative and qualitative assessment of a market. It looks into the size of the market.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className='pb-32'>
        <div className='xl:container container-[100%] mx-auto px-4'>
          <div className='text-center'>
            <h2 className='text-5xl	font-semibold	'>Our <span className='text-[#FFCA1D]'>Features </span> </h2>
          </div>
          <div className='flex flex-wrap -mx-11 items-center mt-24 mb-32'>
            <div className='w-[52%] text-center px-11'>
              <img src={features_img}></img>
            </div>
            <div className='w-[48%]	px-11'>
              <h3 className='text-[40px]	font-semibold	'>Manage everything
                in one workspace</h3>
              <hr class="w-16	bg-[#FFCA1D] h-1.5 my-5"></hr>
              <p className='text-2xl leading-9	text-[#585858]'>Planning, tracking and delivering your team’s best work has never been easier. An integrated workspace that’s simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it.</p>
            </div>
          </div>

          <div className='flex flex-wrap -mx-11 items-center mt-24 mb-32 flex-row-reverse	'>
            <div className='w-[52%] relative text-center px-11'>

              <img src={clock} className='absolute left-28 animate-bounce	' ></img>
              <img src={features_in_img} className='animate-pulse	absolute right-20 top-16'></img>

              <img src={features_2}></img>
            </div>

            <div className='w-[48%]	px-11 relative'>

              <h3 className='text-[40px]	font-semibold	'>Set up in minutes
              </h3>
              <hr class="w-16	bg-[#FFCA1D] h-1.5 my-5"></hr>
              <p className='text-2xl leading-9	text-[#585858]'>Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful template in minutes.
                Choose from hundreds of pre-made templates and tell stories with data
                with our easy drag-and-drop infographic creator.</p>
            </div>
          </div>
        </div>

        <div className='pt-32'>
          <div className='xl:container container-[100%] mx-auto px-4 relative'>
            <span className=' animate-pulse	 top-[185px] left-[24%] w-4 h-4 bg-[#0061FF] rounded-full absolute block'></span>
            <span className='animation-[zoomin_infinite] bottom-[20px] right-[24%] w-5 h-5 bg-[#0061FF] rounded-full absolute block'></span>
            <div className='text-center'>
              <h2 className='text-5xl	font-semibold leading-snug'> <span className='text-[#FFCA1D]'> Integrate </span>  with your existing tools <br></br> in a few clicks</h2>
            </div>

            <div className='flex justify-center mt-24'>
              <div className=' px-11'>
                <img src={Integrate_img_1} className='w-44 h-44'></img>
              </div>
              <div className='px-11'>
                <img src={Integrate_img_2} className='w-44 h-44'></img>
              </div>
              <div className='px-11'>
                <img src={Integrate_img_3} className='w-44 h-44'></img>
              </div>
              <div className='px-11'>
                <img src={Integrate_img_4} className='w-44 h-44'></img>
              </div>
              <div className='px-11'>
                <img src={Integrate_img_5} className='w-44 h-44'></img>
              </div>
            </div>

            <div className='text-center mt-24'>
              <button type="button" className="bg-[#FFCA1D] hover:bg-[#000]/90 focus:ring-4 focus:ring-[#fff]/50  focus:text-white focus:outline-none font-medium rounded-xl text-[26px]  px-7 py-3 2xl:px-12 2xl:py-4 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50  text-[24px] font-semibold	text-[#1F1F1F]">View All</button>
            </div>

          </div>

          <div className='xl:container container-[100%] mx-auto px-4'>
            <div className='flex flex-wrap -mx-11 items-center mt-24 mb-32'>
              <div className='w-[52%] relative text-center px-11'>
                  <div className='w-[582px] h-[582px]'>
                      <img src={save_time} className='animte-spin-slow'></img>
                  </div>
              </div>

              <div className='w-[48%]	px-11 relative'>

                <h3 className='text-[40px]	font-semibold	'>Set up in minutes
                </h3>
                <hr class="w-16	bg-[#FFCA1D] h-1.5 my-5"></hr>
                <p className='text-2xl leading-9	text-[#585858]'>Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful template in minutes.
                  Choose from hundreds of pre-made templates and tell stories with data
                  with our easy drag-and-drop infographic creator.</p>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  );
}

export default App;
