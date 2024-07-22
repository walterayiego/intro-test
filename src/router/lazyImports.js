import { lazy } from "react";

const App = lazy(() => import("../App.jsx"));
const ApprovedSuppliers = lazy(() =>
  import("../Pages/frameworkAgreement/ApprovedSuppliers.jsx")
);
const AuthenticationRoutes = lazy(() => import("./AuthenticationRoutes.jsx"));
const ClosedAgreements = lazy(() =>
  import("../Pages/frameworkAgreement/ClosedAgreements.jsx")
);
const ClosedNotice = lazy(() =>
  import("../Pages/prequalifications/ClosedNotice.jsx")
);
const ClosedPrequalificationId = lazy(() =>
  import("../Pages/prequalifications/ClosedPrequalificationId.jsx")
);
const ClosedPrequalifications = lazy(() =>
  import("../Pages/prequalifications/ClosedPrequalifications.jsx")
);
const ClientProfile = lazy(() => import("../Pages/userProfile/Client.jsx"));
const Dashboard = lazy(() => import("../Pages/mydashboard/Dashboard.jsx"));
const Emailverification = lazy(() =>
  import("../Pages/authentication/Emailverification.jsx")
);
const FrameworkAgreement = lazy(() =>
  import("../Pages/frameworkAgreement/FrameworkAgreement.jsx")
);
const FrameworkAgreementResponses = lazy(() =>
  import("../Pages/frameworkAgreement/FrameworkAgreementResponses.jsx")
);
const HomePage = lazy(() => import("../Pages/HomePage/HomePage.jsx"));
const InfoPage = lazy(() => import("../Pages/authentication/InfoPage.jsx"));
const LayoutRouteSideBar = lazy(() =>
  import("../Components/sidebar/LayoutRouteSideBar.jsx")
);
const Login = lazy(() => import("../Pages/authentication/Login.jsx"));
const Modal = lazy(() => import("../Pages/modal/Modal.jsx"));
const OpenNotice = lazy(() =>
  import("../Pages/prequalifications/OpenNotice.jsx")
);
const PageNotFound = lazy(() => import("../Pages/error/PageNotFound.jsx"));
const NoticeApplications = lazy(() =>
  import("../Pages/prequalifications/NoticeApplications.jsx")
);
const Prequalifications = lazy(() =>
  import("../Pages/prequalifications/Prequalifications.jsx")
);
const PrequalifiedSuppliers = lazy(() =>
  import("../Pages/prequalifications/PrequalifiedSuppliers.jsx")
);
const ProtectedRoutes = lazy(() => import("./ProtectedRoutes.jsx"));
const PurchaseOrder = lazy(() =>
  import("../Pages/purchaseorder/PurchaseOrder.jsx")
);
const PurchaseOrderResponses1 = lazy(() =>
  import("../Pages/purchaseorder/PurchaseOrderResponses1.jsx")
);
const PurchaseOrderResponses2 = lazy(() =>
  import("../Pages/purchaseorder/PurchaseOrderResponses2.jsx")
);
const Register = lazy(() => import("../Pages/authentication/Register.jsx"));
const RequestOfQuatation = lazy(() =>
  import("../Pages/requestofquatation/RequestOfQuatation.jsx")
);
const RequestOfQuatationResponses1 = lazy(() =>
  import("../Pages/requestofquatation/RequestOfQuatationResponses1.jsx")
);
const RequestOfQuatationResponses2 = lazy(() =>
  import("../Pages/requestofquatation/RequestOfQuatationResponses2.jsx")
);
const StartPage = lazy(() => import("../Pages/authentication/StartPage.jsx"));
const Supplieraccount = lazy(() =>
  import("../Pages/userProfile/Supplieraccount.jsx")
);
const SupplierProfile = lazy(() =>
  import("../Pages/userProfile/Supplier.jsx")
);

export {
  App,
  ApprovedSuppliers,
  AuthenticationRoutes,
  ClosedAgreements,
  ClosedNotice,
  ClosedPrequalificationId,
  ClosedPrequalifications,
  ClientProfile,
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
  Supplieraccount,
  SupplierProfile,
};
