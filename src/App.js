import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imagebanco from './images/base-de-dados.png';
import cobranca from './images/cobrancas.png';
import migracao from './images/banco-de-dados-em-nuvem.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyVerticallyCenteredModal(props) {

  let [loading, setLoading] = useState(true);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Analise de cobrança
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Clique em gerar CSV para gerar o relatorio de cobranças com mesmo periodo prestação.
        </p>
      </Modal.Body>
      <Modal.Footer>
      <ClipLoader
        loading={loading}
        size={20}
      />
      <Button variant="outline-primary" onClick={() => setLoading(!loading)}>Gerar CSV</Button>{' '}
        <Button variant="danger" onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}



function App() {

  const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Row xs={2} md={5} className="g-4">
        <Col>
            <Card>
              <Card.Img variant="top" src={imagebanco} />
                <Card.Body>
                    <Card.Title>Assistente de analise de dados</Card.Title>
                      <Button onClick={() => setOpen(!open)} aria-expanded={open}>
                        Informações
                      </Button>
                    <Collapse in={open} dimension="width">
                      <Card.Text>
                        <Card body style={{ width: '340px' }}>
                          O assistente de analise de dados analisa todas informações importantes na migração de dados, facilitando a  vizualização de quantidade de itens importados.
                        </Card>
                      </Card.Text>
                    </Collapse>
                  <Button variant="outline-success">Analisar</Button>{' '}
                </Card.Body>
            </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cobranca} />
                <Card.Body>
                  
                  <Card.Title>Analise de cobranças</Card.Title>
                  <Button onClick={() => setOpen(!open)} aria-expanded={open}>
                        Informações
                      </Button>
                    <Collapse in={open} dimension="width">
                      <Card.Text>
                        <Card body style={{ width: '340px' }}>
                          A analise de cobranças nos traz um relatorio com todas cobranças do tipo plano com mais de um periodo prestacao.
                        </Card>
                      </Card.Text>
                    </Collapse>
                  <Button variant="outline-success" onClick={() => setModalShow(true)}>
                    Analisar
                  </Button>
                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={migracao} />
                <Card.Body>
                  <Card.Title>Migração</Card.Title>
                  <Button onClick={() => setOpen(!open)} aria-expanded={open}>
                        Informações
                      </Button>
                    <Collapse in={open} dimension="width">
                      <Card.Text>
                        <Card body style={{ width: '340px' }}>
                        Migração de dados aonde se encontra todos scripts 
                        </Card>
                      </Card.Text>
                    </Collapse>
                    <Button variant="outline-success">Ir para</Button>{' '}
                </Card.Body>
              </Card>
        </Col>
    </Row>
  );
}
export default App;
