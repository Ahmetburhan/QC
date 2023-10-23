import React, { memo, ReactNode } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import {Icon} from "./../ProviderLogo/ProviderLogo"

export type QuickConnectNodeData = {
  title: string;
  icon?: ReactNode;
  subline?: string;
};

export default memo(({ data }: NodeProps<QuickConnectNodeData>) => {
  return (
    <>
      <div className="wrapper gradient">
        <div className="inner">
          <div className="body">
            {data.icon && <div className="icon">{data.icon}</div>}
            <div>
              <div className="title">{data.title}</div>
              {data.subline && <div className="subline">{data.subline}</div>}
            </div>
          </div>
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </div>
      </div>
    </>
  );
});
