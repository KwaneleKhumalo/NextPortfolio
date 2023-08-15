import { useRouter } from "next/router"
import { Team } from "@/assets/shared/Team"
import { useEffect, useState } from "react"
import TeamPage from "@/features/About/TeamPage"
import { motion } from "framer-motion"
import { pageAnimation } from "@/animation"

const Index = () => {
  const router = useRouter()
  const { id, Name, Position, Description } = router.query

  const [image, setImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [member, setMember] = useState(null)

  const getMemberData = () => {
    setIsLoading(true)
    const foundMember = Team.find(item => item.id === Number(id))
    setMember(foundMember)
    setIsLoading(false)
  }

  useEffect(() => {
    getMemberData()
  }, [id])

  useEffect(() => {
    if (member && member.Media) {
      setImage(member.Media)
    }
  }, [member])

  return <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">{member ? <TeamPage data={member} /> : "No member found."}</motion.div>
}

export default Index
