'use client';

import ProjectCard from '@/components/project-card';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import GetMeAChai from '@/public/getmeachai.png';
import dnsServer from '@/public/dnsServer.png';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    {
      title: '3RVision-Platform',
      role: 'DevOps/Cloud-Native/Service Mesh',
      description:
        'A production-grade Service Mesh implementation using Istio on Kubernetes. Focuses on advanced traffic management with weighted canary deployments, header-based routing, and circuit breaking. Enforces Zero Trust security via strict mTLS and includes a full observability stack (Jaeger for tracing, Prometheus for metrics). Infrastructure provisioning is fully automated using Terraform and Kind.',
      image: '/3rvision_platform.jpg',
      href: 'https://dev.to/denyme24/learning-istio-the-hard-way-a-real-service-mesh-lab-with-canary-mtls-and-tracing-m82',
      code: 'https://github.com/Denyme24/3RVision-Platform',
      demo: 'https://dev.to/denyme24/learning-istio-the-hard-way-a-real-service-mesh-lab-with-canary-mtls-and-tracing-m82',
    },
    {
      title: 'AI-Powered Brochure Generator',
      role: 'AI/DevOps/Cloud-Native',
      description:
        'An intelligent property brochure generator using AI (OpenAI GPT) for multi-language content and professional PDFs. Built a complete DevOps pipeline with GitHub Actions CI/CD, automated Docker builds pushed to Amazon ECR, and zero-downtime deployments to Amazon EKS. Implemented comprehensive observability with Prometheus metrics collection, Grafana dashboards, and Alertmanager with Slack integration for real-time monitoring and alerting. Features containerized microservices (Go/Node.js) and automated cloud deployments.',
      image: '/ai_powered_brochure.jpg',
      href: 'https://drive.google.com/drive/folders/1xU1yfY0JPTt0ru6ibScIjkCbGYIMRylq',
      code: 'https://github.com/Denyme24/AI-Powered-Brochure-Generator',
      demo: 'https://drive.google.com/drive/folders/1xU1yfY0JPTt0ru6ibScIjkCbGYIMRylq',
    },
    {
      title: 'Adaptive Threat Modeler',
      role: 'Full Stack, Security/AI',
      description:
        'A context-aware, AI-powered threat modeling platform for software security. Monitors codebases continuously, builds interactive threat maps, and gives GPT-4-driven remediation suggestions. Integrates static/dynamic analysis, automated reporting, and real-time alerts. Features multi-language analysis (Go, JS/TS, Python, etc), AST-based engine, OWASP/CWE mapping, modern React 3D UI, direct GitHub/Slack integration, risk heatmaps, and MCP (LangChain/OpenAI) agent.',
      image: '/atm.jpg',
      href: 'https://drive.google.com/file/d/1cLziqhJMvmPL3WwkLiboErRbvH6DVblC/view',
      code: 'https://github.com/Denyme24/Adaptive-Threat-Modeler',
      demo: 'https://drive.google.com/file/d/1cLziqhJMvmPL3WwkLiboErRbvH6DVblC/view',
    },
    {
      title: 'CaseCanopy',
      role: 'Full Stack, Legal AI/RAG',
      description:
        'A comprehensive legal AI system combining Retrieval Augmented Generation for legal precedent mining with automated document generation. Find Supreme Court cases, predict outcomes, and create PIL/RTI/Complaint docs integrated with Claude Desktop via MCP. Features RAG for precedent search, FastAPI agentic-AI, Go (Gin) backend, Next.js/React frontend, Python/Flask microservices, secure document management and outcome prediction.',
      image: '/case_canopy.jpg',
      href: 'https://www.youtube.com/watch?v=rX6vY_x8vrA',
      code: 'https://github.com/Denyme24/CaseCanopy',
      demo: 'https://www.youtube.com/watch?v=rX6vY_x8vrA',
    },
    {
      title: 'GetMeAChai',
      role: 'Full Stack',
      description:
        'Get Me a Chai is a crowdfunding platform designed to help creators receive support through direct contributions from fans and followers. Inspired by "Buy Me a Coffee," it allows users to fund creators through donations, ensuring creators can continue doing what they love with the support of their community.',
      image: GetMeAChai,
      href: 'https://get-me-a-chai.namanraj.tech/',
      code: 'https://github.com/Denyme24/GetMeAChai.git',
      demo: 'https://get-me-a-chai-theta.vercel.app/',
    },
    {
      title: 'Custom DNS Server',
      role: 'Networking',
      description:
        'A lightweight DNS server built with Go and Fiber for authoritative domain resolution. Handles UDP-based DNS queries with in-memory record storage and provides a REST API for dynamic record management. Features custom port support and real-time domain mapping. Wrote an in-depth blog explaining DNS fundamentals and the development journey.',
      image: dnsServer,
      href: 'https://dev.to/denyme24/dns-explained-from-basics-to-building-my-own-dns-server-25o6',
      code: 'https://github.com/Denyme24/my-dns-server',
      demo: 'https://github.com/Denyme24/my-dns-server#readme',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-[#F5F0EC] to-[#EAE6E0] py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center justify-center gap-3 text-4xl font-bold"
            >
              <motion.div
                className="h-4 w-4 bg-[#0045FF]"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-2xl leading-relaxed text-gray-600"
            >
              Explore my projects, where each one reflects my growth as a
              developer. From concept to execution, I tackle challenges with
              creativity and technical skill. Dive in to see the work that
              drives my passion for building impactful solutions.
            </motion.p>
          </div>

          {/* Projects Grid with staggered animation */}
          <div className="mx-auto max-w-5xl">
            <motion.div
              className="space-y-12"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </motion.div>
          </div>

          {/* Removed decorative bubble elements */}
        </div>
      </div>
      <Footer />
    </>
  );
}
