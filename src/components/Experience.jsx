import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer 3',
      company: 'JP Morgan Chase',
      location: 'Bengaluru, India',
      period: 'July 2023 – Present',
      achievements: [
        'Scalable Feature Platform: Core contributor to a multi-tenant platform in Go sustaining 15k RPS at P99 4ms via Redis-backed precomputation and Apache Pinot for on-demand aggregation (<200ms)',
        'Architecture Benchmarking: Led evaluation of feature-compute backends; benchmarked InfluxDB, TimescaleDB, and CockroachDB before converging on Pinot with indexed feature-group partitioning to eliminate scale-driven latency throttling, for read time compute features',
        'Infrastructure Isolation: Contributed to a feature-group isolation model (dedicated Kafka topics, Redis clusters, and Pinot, BigQuery tables), improving multi-tenant scalability and operational containment',
        'Zero-Trust AuthZ (Lead): Designed and rolled out an in-house authorization platform using OPA (Rego) with Istio/Envoy ext authz, replacing a decommissioned SaaS; secured 5 services (~800 peak RPS) with default-deny enforcement',
        'Observability & Compliance: Balanced strict financial logging requirements with latency constraints (~20ms overhead), introducing staged E2E validation to ensure zero-regression policy rollouts',
        'Treasury Settlement: Implemented a settlement service (Java/Spring Boot) processing 10k daily inter-bank settlement transactions; enforced idempotency keys and unique constraints to maintain financial correctness across LAC cycles',
        'Martech CDP: Identified 1% silent data loss in an events pipeline (1M events/day); built an AWS Glue (PySpark) ID-diff reconciliation mechanism, restoring event integrity and enabling daily loss attribution',
        'Authored design documents and reviewed cross-team infrastructure proposals for critical treasury and authentication systems'
      ]
    },
    {
      title: 'Software Engineer - ML',
      company: 'ExaWizards Inc',
      location: 'Hyderabad, India',
      period: 'July 2021 – June 2023',
      subtitle: 'Japan based firm specializing in development of AI-enabled services',
      achievements: [
        'Led development of major features in ATP (Auto-Training-Pipeline), an AI pipeline utilizing micro-services architecture to create Synthetic Data using Unity3D, train ML Algorithms, and deploy them on the cloud',
        'Reduced ATP\'s running costs by 70% through AWS resource migration, enabling scalable multi-user access',
        'Leveraged AWS Batch with custom AMIs to execute the synthetic image generation pipeline in the cloud and utilized AWS SageMaker for model training and deployment to end-users',
        'Contributed to the development of a real-time software pipeline for pick-and-place robots, incorporating a deep learning-based perception system and deploying it on a UR5e robot using ROS, MoveIt, gRPC, and Docker'
      ]
    },
    {
      title: 'ML Intern, Vision Tech Group',
      company: 'ExaWizards Inc',
      location: 'Tokyo/Remote',
      period: 'Apr 2020 – Aug 2020',
      achievements: [
        'Achieved 97% accuracy in predicting relative height, with a 5% error margin, using an InceptionV3 network with LDL (Label Distribution Learning) and Expectation Regression',
        'Proposed a new method for pre-processing images that reduced joint loss by 7% in a pose estimation algorithm',
        'Trained a ResNet-based classifier with 93% accuracy to differentiate between children and adults, to be integrated into an AI camera product'
      ]
    }
  ]

  const education = [
    {
      institution: 'Indian Institute Of Technology Kanpur',
      degree: 'Bachelor of Technology in Material Science and Engineering',
      rank: 'Dept. Rank 1, CPI: 8.7/10.0',
      period: 'July 2017 – May 2021'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="experience" className="relative py-12">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="w-6 h-6 mt-1 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div className="space-y-4 w-full">
                    <div>
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.period}</span>
                      </div>
                      <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">{exp.company}</div>
                      <div className="text-gray-600 dark:text-gray-400">{exp.location}</div>
                      {exp.subtitle && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">{exp.subtitle}</div>
                      )}
                    </div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-indigo-600 dark:text-indigo-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">{edu.period}</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">{edu.degree}</div>
                    {edu.rank && (
                      <div className="text-md text-gray-600 dark:text-gray-400">{edu.rank}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
