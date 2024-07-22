import React from "react";
import NoticeApplicationForm from "./NoticeApplicationForm";
import DialogComponent from "../../../Components/DialogComponent";
import PrequalificationForm from "./PrequalificationForm";
import UpdateForm from "./UpdateForm";
import NoticeApplications from "../NoticeApplications";

import PrequalifiedSuppliers from "../PrequalifiedSuppliers";

function AllModals({
  notices,
  openNoticeApplicationForm,
  openResponses,
  openForm,
  setOpenResponses,
  setOpenForm,
  noticeDetails,
  selectedPrequal,
  update,
  handlePrequalificationForm,
  setOpenNoticeApplicationForm,
  openPrequalifiedSuppliers,
  setOpenPrequalifiedSuppliers,
}) {
  return (
    <div>
      <DialogComponent
        open={openNoticeApplicationForm}
        setOpen={setOpenNoticeApplicationForm}
        styles="drop-shadow-lg"
        config={{ maxWidth: "lg" }}
        children={
          <NoticeApplicationForm
            params={noticeDetails}
            openNoticeApplicationForm={openNoticeApplicationForm}
            setOpenNoticeApplicationForm={setOpenNoticeApplicationForm}
          />
        }
      />
      <DialogComponent
        open={openPrequalifiedSuppliers}
        setOpen={setOpenPrequalifiedSuppliers}
        styles="drop-shadow-lg"
        config={{ maxWidth: "lg" }}
        children={<PrequalifiedSuppliers notices={notices} />}
      />
      <DialogComponent
        open={openResponses}
        setOpen={setOpenResponses}
        styles="drop-shadow-lg"
        children={<NoticeApplications selectedPrequal={selectedPrequal} />}
        config={{
          maxWidth: "lg",
        }}
      />
      <DialogComponent
        open={openForm}
        styles="drop-shadow-lg"
        setOpen={setOpenForm}
        children={
          update ? (
            <UpdateForm show={handlePrequalificationForm} update={update} />
          ) : (
            <PrequalificationForm show={handlePrequalificationForm} />
          )
        }
        config={{
          maxWidth: "lg",
        }}
      />
    </div>
  );
}

export default AllModals;
