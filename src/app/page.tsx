'use client';

import clsx from 'clsx';
import Head from 'next/head';
import React from 'react';
import '@/lib/env';

import useDarkMode from '@/lib/storage';

import Figure from '@/components/Figure';
import KatexSpan from '@/components/KaTeX';
import ArrowLink from '@/components/links/ArrowLink';
import RerunViewerInline from '@/components/RerunViewer/InlineViewer';
import RerunViewerPopup from '@/components/RerunViewer/RerunViewer';
import ExternalSwitch from '@/components/Switch';

import BlackBirdGif from '~/images/blackbird_caption.gif';
import EuRoCGif from '~/images/euroc_caption.gif';
import PegasusGif from '~/images/pegasus_caption.gif';
import SystemFig from '~/images/system_transparentbg.png';


export default function HomePage() {
  const [mode, toggleMode] = useDarkMode();
  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const bgColor = mode === 'dark' ? 'bg-dark' : 'bg-white';
  const maskColor = mode === 'dark' ? 'bg-dark/70' : 'bg-white/70';
  const secondaryBgColor = mode === 'dark' ? 'bg-neutral-700' : 'bg-gray-100';
  const hlTextColor = mode === "dark" ? "text-primary-500" : "text-primary-600";

  return (
    <main>
      <Head>
        <meta name="google-site-verification" content="wORtJ7fq4X_rDll9Ym7DJ4lHQvSwbb87d_dflv28rN8" />
      </Head>
      <section className={
        clsx(bgColor, textColor,
          "relative flex items-center justify-center h-screen overflow-hidden"
        )
      }>
        <div className='absolute top-6 right-4 z-20'>
          <span>Light Mode </span>
          <ExternalSwitch state={mode === "light"} switch_state={toggleMode} />
        </div>
        <div className='layout z-20 relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='mt-4 text-5xl'>
            AirIO: Learning <span className={hlTextColor}>I</span>nertial <span className={hlTextColor}>O</span>dometry with<br/>Enhanced IMU Feature Observability
          </h1>
          <div className='container py-6'>
            <span className='text-lg font-semibold'>
              Yuheng Qiu<span className="align-super text-xs leading-none">*1</span>, 
              Can Xu<span className="align-super text-xs leading-none">*1</span>, 
              Yutian Chen<span className="align-super text-xs leading-none">1</span>,
              Shibo Zhao<span className="align-super text-xs leading-none">1</span>, 
              Junyi Geng<span className="align-super text-xs leading-none">2</span> and 
              Sebastian Scherer<span className="align-super text-xs leading-none">1</span>
              <br />
            </span>
            <span className='text-lg'>
              Carnegie Mellon University
            </span>
          </div>
          <div className="container flex flex-row items-center space-x-8 justify-center text-lg">
            <ArrowLink className='mt-6' href='https://github.com/Air-IO/Air-IO' variant={mode} size='large'>
              GitHub Repo
            </ArrowLink>
            <ArrowLink className='mt-6' href='https://arxiv.org/abs/2501.15659' variant={mode} size='large'>
              arXiv Page
            </ArrowLink>
          </div>
        </div>
        <div className={clsx("absolute w-auto min-w-full min-h-full max-w-none z-10 backdrop-blur-sm", maskColor)} />
        <div className="absolute bottom-4 left-4 z-20">
          <p><span className="align-super text-xs leading-none">*</span> Equal Contribution.</p>
          <p><span className="align-super text-xs leading-none">1</span> Robotics Institute, Carnegie Mellon University.</p>
          <p><span className="align-super text-xs leading-none">2</span> Department of Aerospace Engineering, Pennsylvania State University.</p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute w-auto min-w-full min-h-full max-w-none z-0"
        >
          <source
            src="/video/AirIO_HeroVideo.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2 className='text-center pb-4'>Abstract</h2>
          <p className='text-pretty'>
          Inertial odometry (IO) using only Inertial Measurement Units (IMUs) offers a lightweight and cost-effective solution for Unmanned Aerial Vehicle (UAV) applications, yet existing learning-based IO models often fail to generalize to UAVs due to the highly dynamic and non-linear-flight patterns that differ from pedestrian motion. 
          In this work, we identify that the conventional practice of transforming raw IMU data to global coordinates undermines the observability of critical kinematic information in UAVs. By preserving the body-frame representation, our method achieves substantial performance improvements, with a 66.7% average increase in accuracy across three datasets. Furthermore, explicitly encoding attitude information into the motion network results in an additional 23.8% improvement over prior results. Combined with a data-driven IMU correction model (AirIMU) and an uncertainty-aware Extended Kalman Filter (EKF), our approach ensures robust state estimation under aggressive UAV maneuvers without relying on external sensors or control inputs. Notably, our method also demonstrates strong generalizability to unseen data not included in the training set, underscoring its potential for real-world UAV applications.
          </p>

          <h2 className='pt-4 pb-2'>Introduction</h2>
          <video
            autoPlay
            muted
            controls
            className="mx-auto z-0 rounded-lg"
          >
          <source
            src="/video/1_AirIO_introduction.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </div>
      </section>

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Results</h2>
          <p className='py-4 text-lg'>
            Without external sensors or control information, AirIO achieves <span className='text-primary-500'>up to a 86.6% performance boost</span> over SOTA methods
          </p>
          <video autoPlay muted controls loop className="mx-auto z-0 rounded-lg">
            <source
              src="/video/blackbird_for_web.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <h3 className='py-6'>Interactive Demo</h3>
          <p className='italic'>Demo may take several seconds to load, depending on your network connection status.</p>
          <RerunViewerInline
            title='AirIO on EuRoC MH04'
            rrd_file='/rerun/euroc_mh04.rrd'
            height='70vh'
          />
        </div>
      </section>

      <section className={clsx(bgColor, textColor)}>
        <div className='layout pt-12'>
          <h2 className='pb-4'>Methods</h2>
          <p className='py-4 text-lg'>
          We identify the commonly used global-coordinate approach is suboptimal for UAVs due to their dynamic nature. Two simple steps to achieve significant gains: 
          <ol className='text-xl list-decimal ml-12 pt-2'>
            <li className='pt-2 text-primary-500'>Predicting velocity using body-coordiante frame representation.</li>
            <li className='pt-2 text-primary-500'>Explicitly encoding UAV attitude information.</li>
          </ol>
          </p>
        </div>
        <div className='flex'>
            <Figure img_src={BlackBirdGif.src} caption="Blackbird" isDark={mode === 'dark'} idx={1}/>
            <Figure img_src={EuRoCGif.src} caption="EuRoC" isDark={mode === 'dark'} idx={2}/>
            <Figure img_src={PegasusGif.src} caption="Pegasus" isDark={mode === 'dark'} idx={3}/>
        </div>
        <div className='layout py-12'>
          <video autoPlay muted controls loop className="mx-auto z-0 rounded-lg">
            <source
              src="/video/2_AirIO_insights.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout py-12'>
          <h2>System Pipeline</h2>
          <Figure
            img_src={SystemFig.src}
            caption="By integrating the novel AirIO network and an uncertainty-aware IMU preintegration model into an EKF, we achieve robust odometry even under aggressive maneuvers."
            isDark={mode !== 'dark'}
            idx={4}
            captionclr={mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}
          />
        </div>
      </section>
    </main >
  );
}
