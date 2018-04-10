import React from 'react';
import Dialog from 'material-ui/Dialog'
export const EModal= props=>{
   return (
       <Dialog  autoScrollBodyContent={true} contentStyle={props.contentStyle} title={props.titleNode}  modal={false} open={props.isOpen}  actions={props.actions}>
           {props.children}
       </Dialog>
   )
}