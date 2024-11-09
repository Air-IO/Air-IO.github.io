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
          <h1 className='mt-4 text-5xl'>Air-IO: Learning Inertial Odometry for Drone</h1>
          <div className='container py-6'>
            <span className='text-lg font-semibold'>
              Yuheng Qiu<span className="align-super text-xs leading-none">*1</span>, 
              Can Xu<span className="align-super text-xs leading-none">*1</span>, 
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
            <ArrowLink className='mt-6' href='https://github.com/MAC-VO/MAC-VO' variant={mode} size='large'>
              GitHub Repo
            </ArrowLink>
            <ArrowLink className='mt-6' href='https://arxiv.org/abs/2409.09479' variant={mode} size='large'>
              arXiv Page
            </ArrowLink>
            <ArrowLink className='mt-6' href='https://mac-vo.github.io/wiki/' variant={mode} size='large'>
              Documentation
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
            src="/video/SLAM_on_Moon_with_cov.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2 className='text-center pb-4'>Abstract</h2>
          <p className='text-pretty'>
            While quadrotors are increasingly popular due to their agility and versatility, a key challenge is state estimation under size, weight, power, and cost (SWAP-C) constraints. Inertial odometry (IO) with lightweight and inexpensive sensors Inertial Measurement Units (IMUs) is ideal for this purpose. However, the noise and bias of IMU cause the accumulation of large drift. Existing methods either rely on motion prior, which is not applicable for the highly dynamic and nonlinear nature of quadrotor motion, or require additional sensors or control inputs, limiting their practicality. This paper explores effective representations for learning-based IO in quadrotor motion and proposes AirIO, a method that relies solely on raw IMU data. Through rigorous Lipschitz analysis, we identify that body representation is more effective than global representation in encoding attitude information for agile maneuvering. AirIO explicitly encodes attitude information and predicts velocity using body representation. We further integrate an Extended Kalman Filter (EKF) to fuse IMU pre-integration with the learning-based model for robust odometry estimation.
            Our experiments show that AirIO outperforms state-of-the-art methods, achieving an 81.53% improvement in simulated data and a 60% improvement in real-world data, all without the need for extra sensors.
          </p>

          <h2 className='pt-4 pb-2'>Video</h2>
          <div className='rounded-xl mb-8 h-96 w-96 text-center align-middle bg-slate-200'>
            Placeholder for Video.
          </div>
        </div>
      </section>

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout py-12'>
          <h2 className='pb-4'>Results</h2>
          <div className='layout py-4'>
            <p><span className='mt-2 font-light'>Interactive 3D Demo, drag for viewport rotation and scroll to zoom in/out</span></p>
            <p><span className='mt-2 font-bold text-primary-600'>Loading a demo may take several seconds, depending on your network condition.</span></p>
            <RerunViewerInline
              title="TartanAir Abandon Factory 1"
              rrd_file="/rerun/TartanAir1_abf000.rrd"
              fallback_video='/video/Rotate_TartanAir1.mp4'
              height='75vh'
            />
          </div>

          <hr />
          <h4 className='py-4'>More Interactive 3D Demos</h4>
          <p className='pb-4'>
            We present some additional maps and trajectories reconstructed by the MAC-VO using default configuration (without fine-tuning).
            Click to open interactive 3D demo.
          </p>

          <RerunViewerPopup
            title="TartanAirv2, Test Trajectory H002"
            rrd_file="/rerun/TartanAir2_H002.rrd"
          />

          &nbsp;

          <RerunViewerPopup
            title="EuRoC, Trajectory V102"
            rrd_file="/rerun/EuRoC_V102.rrd"
          />

          &nbsp;

          <RerunViewerPopup
            title="KITTI, Trajectory 07"
            rrd_file="https://mac-vo.github.io/rerun/KITTI_K07.rrd"
          />
        </div>
      </section>

      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2 className='pb-4'>Methods</h2>
          <h3 className='pt-4'>Placeholder Here</h3>
          {/* <Figure
            img_src="/images/Methods.png"
            caption="MAC-VO System pipeline. First, we use a shared matching network to estimate the depth, flow, and corresponding uncertainty. Secondly, we employ the learned uncertainty to filter out unreliable features. Lastly, we optimize the pose with the metrics-aware covariance model."
            isDark={mode === "dark"}
            idx={1}
          />

          <h3 className='pt-4'>Metrics-Aware Spatial Covariance</h3>
          <Figure
            img_src="/images/SpatialCovariance.png"
            caption={
              <span>
                a) Depth uncertainty estimated with the presence of matching uncertainty.
                b) Projecting depth and matching uncertainty on sensor plane to 3D space.
                c) Residual <KatexSpan text="$\mathcal{L}_i$" /> for pose graph optimization.
              </span>
            }
            isDark={mode === "dark"}
            idx={2}
          /> */}
        </div>
      </section>
    </main >
  );
}
