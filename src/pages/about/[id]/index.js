import NavMenu from "@/components/Navbar"
import { useRouter } from "next/router"
import { Team } from "@/assets/shared/Team"
import { Button, Col, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import TeamPage from "@/features/About/TeamPage"

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

  return <>{member ? <TeamPage data={member} /> : "No member found."}</>
}

export default Index
