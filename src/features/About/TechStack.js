import { Row, Col } from "react-bootstrap"
import Link from "next/link"
import { BiLogoMongodb, BiLogoReact, BiLogoJavascript, BiLogoNodejs, BiLogoRedux, BiLogoBootstrap, BiLogoGithub, BiLogoBehance, BiPen, BiPalette, BiSolidPaint, BiPaint } from "react-icons/bi"

const TechStack = ({ data, links, name }) => {
  
  return (
    <Row className="align-items-center mx-auto mt-5 ">
      <Row className="text-center justify-content-center p-5 border-bottom border-info mx-auto">
        <Col md={12} className="text-center mb-5">
          <h2>
            High <span className="text-info">Quality</span> Tech <span className="text-info">Stack!</span>
          </h2>
        </Col>

        {name === "Kwanele Khumalo" &&
          data.map((stack, index) => (
            <Row key={index} className="text-center">
              <Col sm={12} md={5} lg={4} xl={2} className="mx-auto mt-5">
                {stack.mongoDb ? (
                  <h3>
                    <span className="text-success">{<BiLogoMongodb size={40} />}</span> {stack.mongoDb}
                  </h3>
                ) : (
                  ""
                )}
              </Col>

              <Col md={5} lg={4} xl={2} className="mx-auto mt-5">
                {stack.react ? (
                  <h3>
                    <span className="text-info">{<BiLogoReact size={40} />}</span> {stack.react}
                  </h3>
                ) : (
                  ""
                )}
              </Col>

              <Col md={5} lg={4} xl={2} className="mx-auto mt-5">
                {stack.express ? (
                  <h3>
                    <span className="text-success">{<BiLogoNodejs size={40} />}</span> {stack.express}
                  </h3>
                ) : (
                  ""
                )}
              </Col>

              <Col md={5} lg={4} xl={2} className="mx-auto mt-5">
                {stack.javaScript ? (
                  <h3>
                    <span className="text-success">{<BiLogoJavascript size={40} />}</span> {stack.javaScript}
                  </h3>
                ) : (
                  ""
                )}
              </Col>

              <Col md={5} lg={4} xl={2} className="mx-auto mt-5">
                {stack.redux ? (
                  <h3 className="text-center">
                    <span className="text-success">{<BiLogoRedux size={40} />}</span> {stack.redux}
                  </h3>
                ) : (
                  ""
                )}
              </Col>

              <Col md={5} lg={4} xl={2} className="mx-auto mt-5">
                {stack.bootstrap ? (
                  <h3 className="text-center">
                    <span style={{ color: "#563d7c" }}>{<BiLogoBootstrap size={40} />}</span> {stack.bootstrap}
                  </h3>
                ) : null}
              </Col>
            </Row>
          ))}

        {name === "Shandi Khumalo" &&
          data.map((stack, index) => (
            <Row key={index} className="text-center">
              <Col sm={12} md={5} lg={4} xl={2} className="mx-auto mt-3">
                {stack.illustration ? (
                  <h3>
                    <span className="text-info">{<BiPen size={40} />}</span> {stack.illustration}
                  </h3>
                ) : (
                  ""
                )}
              </Col>

              <Col sm={12} md={5} lg={4} xl={2} className="mx-auto mt-3">
                {stack.graphic ? (
                  <h3>
                    <span className="text-light">{<BiPalette size={40} />}</span> {stack.graphic}
                  </h3>
                ) : (
                  ""
                )}
              </Col>

              <Col sm={12} md={5} lg={4} xl={2} className="mx-auto mt-3">
                {stack.design ? (
                  <h3>
                    <span className="text-info">{<BiSolidPaint size={40} />}</span> {stack.design}
                  </h3>
                ) : (
                  ""
                )}
              </Col>

              <Col sm={12} md={5} lg={4} xl={2} className="mx-auto mt-3">
                {stack.logo ? (
                  <h3>
                    <span className="text-light">{<BiPaint size={40} />}</span> {stack.logo}
                  </h3>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          ))}
        {links.map((link, index) => (
          <Row key={index} className="mt-5 mx-auto justify-content-center">
            <Col md={12}>
              {link.github ? (
                <Link rel="noopener noreferrer" target="_blank" className="btn btn-outline-info text-light col-xl-1 col-lg-2 col-md-4 col-6" href={link.github}>
                  <BiLogoGithub size={30} />
                </Link>
              ) : (
                ""
              )}
            </Col>
            <Col md={12}>
              {link.behance ? (
                <Link rel="noopener noreferrer" target="_blank" className="btn btn-outline-info text-light mt-5 col-xl-1 col-lg-2 col-md-4 col-6" href={link.behance}>
                  <BiLogoBehance size={30} />
                </Link>
              ) : (
                ""
              )}
            </Col>
          </Row>
        ))}
      </Row>
    </Row>
  )
}

export default TechStack
