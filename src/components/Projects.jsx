import { motion } from 'framer-motion'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

const Projects = () => {
  const projects = [
    {
      title: 'Citizen Comfort Analysis in Montreal, Concordia University',
      period: '2019',
      achievements: [
        'Tools: LDA, BERT, sentiment analysis'
      ]
    },
    {
      title: 'Automated Omics Pipeline & Scalable Shiny App, Elucidata',
      period: '2020',
      achievements: [
        'Tools: Python & R (Shiny app)'
      ]
    },
    {
      title: 'BETIC Medical Innovation Challenge, IIT Bombay',
      period: '2018',
      achievements: [
        'Tools: regression ML models, HW sensors'
      ]
    }
  ]

  const achievements = [
    {
      year: '2024',
      title: 'Won Mission 3 of StarTree Mission Impossible Challenge: Optimized Apache Pinot for the fastest query times'
    },
    {
      year: '2021',
      title: 'Recipient of the prestigious Batra Gold Medal for academic excellence, MSE dept, IIT Kanpur'
    },
    {
      year: '2020',
      title: 'Awarded MITACS Globalink Research Scholarship, Canada'
    },
    {
      year: '2019',
      title: 'Team reached Quarterfinals in IICDC (India Innovation Challenge by Texas Instruments)'
    },
    {
      year: '2018',
      title: 'Secured Bronze in BETiC Medical Innovation Challenge, Inter IIT Tech Meet, IIT Bombay'
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
    <section id="projects" className="relative py-12">
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
              Projects
            </h2>
          </motion.div>

          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">{project.period}</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-700 dark:text-gray-300"></div>
                  </div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-indigo-600 dark:text-indigo-400">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </h2>
          </motion.div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">{achievement.year}</span>
                    </div>
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

export default Projects
