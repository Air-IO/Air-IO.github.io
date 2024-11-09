"use client"

import WebViewer from '@rerun-io/web-viewer-react';
import { DownloadIcon, MaximizeIcon } from 'lucide-react';
import React from "react";

import NoSSR from '@/components/NoSSR';
import MobileFallback from '@/components/RerunViewer/MobileFallback';
import PopupWindow from "@/components/RerunViewer/Popup";


type RerunViewerBannerProps = {
  title: string;
  rrd_file: string;
  height: string;
  fallback_video?: string;
  width?: string;
}

const RerunViewerInline = ({ title, rrd_file, width = '100%', height, fallback_video }: RerunViewerBannerProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const fallback_elem = fallback_video ?
    <div>
      <span className='text-primary-400 font-light text-center'>Interactive 3D scene not supported on mobile device. Open this webpage on PC for better experience.</span>
      <video autoPlay loop muted className="w-96">
        <source src={fallback_video} type="video/mp4" />
      </video>
    </div> :
    <span className='text-primary-400 font-semibold'>Interactive 3D scene not supported on mobile device. Please open this webpage on PC.</span>;

  if (expanded) {
    return (
      <PopupWindow onClose={() => setExpanded(false)} title={title} subtitle={"Data: " + rrd_file} download={rrd_file}>
        <MobileFallback fallback={fallback_elem}>
          <WebViewer rrd={rrd_file} width="100%" height="85vh" />
        </MobileFallback>
      </PopupWindow>
    );
  } else {
    return (
      <div className='p-2 rounded-md' style={{ backgroundColor: "#0d1011" }}>
        <div className="px-2 flex justify-between align-middle items-center pb-2">
          <span className="font-semibold leading-6 text-gray-300">{title}</span>
          <span className="text-sm font-normal text-gray-500 text-clip">{rrd_file}</span>
          <div className='flex flex-nowrap'>
            <a download href={rrd_file}>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 sm:ml-3 sm:w-auto"
              >
                <DownloadIcon size={16} />
              </button>
            </a>
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex w-full justify-center rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 sm:ml-3 sm:w-auto"
            >
              <MaximizeIcon size={16} />
            </button>
          </div>
        </div>
        <NoSSR>
          <MobileFallback fallback={fallback_elem}>
            <WebViewer rrd={rrd_file} width={width} height={height} />
          </MobileFallback>
        </NoSSR>
      </div>
    );
  }
}

export default RerunViewerInline;
