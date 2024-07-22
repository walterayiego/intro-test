import React from "react";
import { Dialog, Slide } from "@mui/material";
import { Close } from "@mui/icons-material";

export const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DialogComponent = ({ open, setOpen, styles, config, children }) => {
  const handleClose = () => setOpen(!open);
  return (
    <Dialog
      {...config}
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      className={`relative ${styles} bg-black/70`}
    >

      <div className="relative col bg-background ">
        <button
          className="fixed rounded-full z-10 m-[1vw] p-0 self-end border-2 border-white"

          onClick={handleClose}
        >
          <Close />
        </button>
        <div className="h-[2vh] " />

        <div className="px-[2vw]">{children}</div>
      </div>
    </Dialog>
  );
};

export default DialogComponent;
