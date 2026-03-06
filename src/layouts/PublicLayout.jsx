import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import AdminGuard from '../components/AdminGuard';
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

// 온라인연구실
const ResearchLab = lazy(() => import('../pages/ResearchLab'));
const OnlineLectures = lazy(() => import('../pages/OnlineLectures'));
const LiveLectures = lazy(() => import('../pages/LiveLectures'));
const LectureMaterials = lazy(() => import('../pages/LectureMaterials'));
const ThesisGuidance = lazy(() => import('../pages/ThesisGuidance'));

// 분야별 자료
const FieldResources = lazy(() => import('../pages/FieldResources'));
const FieldDetail = lazy(() => import('../pages/FieldDetail'));

// 연구 프로젝트
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));

// 커뮤니티
const Community = lazy(() => import('../pages/Community'));
const CommunityDetail = lazy(() => import('../pages/CommunityDetail'));

// 사용자 작성 페이지
const ProjectCreate = lazy(() => import('../pages/ProjectCreate'));
const CommunityWrite = lazy(() => import('../pages/CommunityWrite'));

// 관리자 페이지
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const AdminProjects = lazy(() => import('../pages/admin/AdminProjects'));
const AdminProjectForm = lazy(() => import('../pages/admin/AdminProjectForm'));
const AdminCommunity = lazy(() => import('../pages/admin/AdminCommunity'));
const AdminCommunityForm = lazy(() => import('../pages/admin/AdminCommunityForm'));
const AdminMaterials = lazy(() => import('../pages/admin/AdminMaterials'));
const AdminMaterialForm = lazy(() => import('../pages/admin/AdminMaterialForm'));
const AdminThesisGuidance = lazy(() => import('../pages/admin/AdminThesisGuidance'));
const AdminThesisGuidanceForm = lazy(() => import('../pages/admin/AdminThesisGuidanceForm'));

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

            {/* 온라인연구실 */}
            <Route path="/lab" element={<ResearchLab />} />
            <Route path="/lab/lectures" element={<OnlineLectures />} />
            <Route path="/lab/live" element={<LiveLectures />} />
            <Route path="/lab/materials" element={<LectureMaterials />} />
            <Route path="/lab/guidance" element={<AuthGuard><ThesisGuidance /></AuthGuard>} />

            {/* 분야별 자료 */}
            <Route path="/fields" element={<FieldResources />} />
            <Route path="/fields/:fieldId" element={<FieldDetail />} />

            {/* 연구 프로젝트 */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/create" element={<AuthGuard><ProjectCreate /></AuthGuard>} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />

            {/* 커뮤니티 */}
            <Route path="/community" element={<Community />} />
            <Route path="/community/write" element={<AuthGuard><CommunityWrite /></AuthGuard>} />
            <Route path="/community/edit/:postId" element={<AuthGuard><CommunityWrite /></AuthGuard>} />
            <Route path="/community/:postId" element={<CommunityDetail />} />

            {/* 관리자 */}
            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="/admin/projects" element={<AdminGuard><AdminProjects /></AdminGuard>} />
            <Route path="/admin/projects/new" element={<AdminGuard><AdminProjectForm /></AdminGuard>} />
            <Route path="/admin/projects/edit/:id" element={<AdminGuard><AdminProjectForm /></AdminGuard>} />
            <Route path="/admin/community" element={<AdminGuard><AdminCommunity /></AdminGuard>} />
            <Route path="/admin/community/new" element={<AdminGuard><AdminCommunityForm /></AdminGuard>} />
            <Route path="/admin/community/edit/:id" element={<AdminGuard><AdminCommunityForm /></AdminGuard>} />
            <Route path="/admin/materials" element={<AdminGuard><AdminMaterials /></AdminGuard>} />
            <Route path="/admin/materials/new" element={<AdminGuard><AdminMaterialForm /></AdminGuard>} />
            <Route path="/admin/materials/edit/:id" element={<AdminGuard><AdminMaterialForm /></AdminGuard>} />
            <Route path="/admin/guidance" element={<AdminGuard><AdminThesisGuidance /></AdminGuard>} />
            <Route path="/admin/guidance/edit/:id" element={<AdminGuard><AdminThesisGuidanceForm /></AdminGuard>} />

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
