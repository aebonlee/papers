import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const OrderConfirmation = lazy(() => import('../pages/OrderConfirmation'));
const OrderHistory = lazy(() => import('../pages/OrderHistory'));
const NotFound = lazy(() => import('../pages/NotFound'));

// 논문작성 가이드
const WritingGuide = lazy(() => import('../pages/WritingGuide'));
const PaperStructure = lazy(() => import('../pages/PaperStructure'));
const ResearchMethodology = lazy(() => import('../pages/ResearchMethodology'));
const AcademicWriting = lazy(() => import('../pages/AcademicWriting'));
const ReferenceManagement = lazy(() => import('../pages/ReferenceManagement'));
const StatisticalAnalysis = lazy(() => import('../pages/StatisticalAnalysis'));
const ResearchEthics = lazy(() => import('../pages/ResearchEthics'));

// 분야별 자료
const FieldResources = lazy(() => import('../pages/FieldResources'));
const FieldDetail = lazy(() => import('../pages/FieldDetail'));

// 연구 프로젝트
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));

// 커뮤니티
const Community = lazy(() => import('../pages/Community'));
const CommunityDetail = lazy(() => import('../pages/CommunityDetail'));

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
            <Route path="/mypage/orders" element={<AuthGuard><OrderHistory /></AuthGuard>} />

            {/* Shop */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />

            {/* 논문작성 가이드 */}
            <Route path="/guide" element={<WritingGuide />} />
            <Route path="/guide/structure" element={<PaperStructure />} />
            <Route path="/guide/methodology" element={<ResearchMethodology />} />
            <Route path="/guide/writing" element={<AcademicWriting />} />
            <Route path="/guide/reference" element={<ReferenceManagement />} />
            <Route path="/guide/statistics" element={<StatisticalAnalysis />} />
            <Route path="/guide/ethics" element={<ResearchEthics />} />

            {/* 분야별 자료 */}
            <Route path="/fields" element={<FieldResources />} />
            <Route path="/fields/:fieldId" element={<FieldDetail />} />

            {/* 연구 프로젝트 */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />

            {/* 커뮤니티 */}
            <Route path="/community" element={<Community />} />
            <Route path="/community/:postId" element={<CommunityDetail />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
