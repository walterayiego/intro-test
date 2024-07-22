import { Routes, Route, useNavigate } from "react-router-dom";
import Suspense from "../Components/Suspense";
import {
  App,
  ApprovedSuppliers,
  AuthenticationRoutes,
  ClientProfile,
  ClosedAgreements,
  ClosedNotice,
  ClosedPrequalificationId,
  ClosedPrequalifications,
  Dashboard,
  Emailverification,
  FrameworkAgreement,
  FrameworkAgreementResponses,
  HomePage,
  InfoPage,
  LayoutRouteSideBar,
  Login,
  Modal,
  OpenNotice,
  PageNotFound,
  NoticeApplications,
  Prequalifications,
  PrequalifiedSuppliers,
  ProtectedRoutes,
  PurchaseOrder,
  PurchaseOrderResponses1,
  PurchaseOrderResponses2,
  Register,
  RequestOfQuatation,
  RequestOfQuatationResponses1,
  RequestOfQuatationResponses2,
  StartPage,
  SupplierProfile,
  Supplieraccount,
} from "./lazyImports.js";

import LandingPage from "../Pages/LandingPage/LandingPage.jsx";
import { Outlet } from "react-router-dom";
import PrequalificationsRoutes from "./PrequalificationsRoutes.jsx";
import AgreementsRoutes from "./AgreementsRoutes.jsx";
import ProfileRoute from "../Pages/userProfile/ProfileRoute.jsx";

const Router = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<App />}>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route element={<AuthenticationRoutes />}>
            <Route path="/start" element={<StartPage />} />
            <Route path="/infoPage" element={<InfoPage />} />
            <Route path="/email-verification">
              <Route index element={<Emailverification />} />
              <Route path=":userId/:code" element={<Emailverification />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route element={<LayoutRouteSideBar />}>
              <Route path="home" element={<HomePage />} />
              <Route path="dashboard" element={<Dashboard />} />

              <Route
                path="prequalifications"
                element={<PrequalificationsRoutes />}
              >
                <Route index element={<Prequalifications />} />
                <Route path="open/:id" element={<OpenNotice />} />

                <Route
                  path="prequalified-suppliers"
                  element={<PrequalifiedSuppliers />}
                />

                <Route path="responses">
                  <Route index element={<NoticeApplications />} />
                  <Route path=":id" element={<NoticeApplications />} />
                </Route>

                <Route path="closed">
                  <Route index element={<ClosedNotice />} />
                  <Route path="all" element={<ClosedPrequalifications />} />
                  <Route path=":id" element={<ClosedPrequalificationId />} />
                </Route>
              </Route>

              <Route path="frameworkagreements" element={<AgreementsRoutes />}>
                <Route index element={<FrameworkAgreement />} />
                <Route path="responses">
                  <Route index element={<FrameworkAgreementResponses />} />
                  <Route path=":id" element={<FrameworkAgreementResponses />} />
                </Route>
                <Route
                  path="approved-suppliers"
                  element={<ApprovedSuppliers />}
                />
                <Route path="closed" element={<ClosedAgreements />} />

                {/* 

                <Route path="closed">
                  <Route index element={<ClosedNotice />} />
                  <Route path="all" element={<ClosedPrequalifications />} />
                  <Route path=":id" element={<ClosedPrequalificationId />} />
                </Route> */}
              </Route>
              <Route path="supplieraccount" element={<Supplieraccount />} />

              <Route path="modal" element={<Modal />} />
              <Route path="profile" element={<ProfileRoute />}>
                <Route path="client" element={<ClientProfile />} />
                <Route path="supplier" element={<SupplierProfile />} />
              </Route>
            </Route>

            <Route path="requestofquatation" element={<RequestOfQuatation />} />
            <Route
              path="requestofquatationresponses1"
              element={<RequestOfQuatationResponses1 />}
            />
            <Route
              path="requestofquatationresponses2"
              element={<RequestOfQuatationResponses2 />}
            />
            <Route path="purchaseorder" element={<PurchaseOrder />} />
            <Route
              path="purchaseorderresponses1"
              element={<PurchaseOrderResponses1 />}
            />
            <Route
              path="purchaseorderresponses2"
              element={<PurchaseOrderResponses2 />}
            />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
