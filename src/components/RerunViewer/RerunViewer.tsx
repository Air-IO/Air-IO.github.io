"use client"

import WebViewer from '@rerun-io/web-viewer-react';
import { VideoIcon } from "lucide-react";
import React from "react";

import IconButton from '@/components/buttons/IconButton';
import NoSSR from '@/components/NoSSR';
import PopupWindow from "@/components/RerunViewer/Popup";


type RerunViewerBannerProps = {
  title: string;
  rrd_file: string;
  width?: string;
}

const RerunViewerPopup = ({ title, rrd_file, width = '100%' }: RerunViewerBannerProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  if (expanded) {
    return (
      <NoSSR>
        <PopupWindow onClose={() => setExpanded(false)} title={title} subtitle={"Data: " + rrd_file} download={rrd_file}>
          <WebViewer rrd={rrd_file} width={width} height="85vh" />
        </PopupWindow>
      </NoSSR>
    );
  } else {
    return (
      // <UnderlineLink className='text-primary-500' href="" onClick={() => setExpanded(true)}>{title} &nbsp; <VideoIcon /></UnderlineLink>
      <IconButton icon={VideoIcon} content={title} onClick={() => setExpanded(true)} type='button' variant='outline' />
    );
  }
}

export default RerunViewerPopup;
