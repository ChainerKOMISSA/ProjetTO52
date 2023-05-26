import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Newevent() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nom de l'évènement</Form.Label>
          <Form.Control type="text" placeholder="Entrez le nom" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Sélectionnez un type...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Description de l'évènement</Form.Label>
          <Form.Control type="text" placeholder="Entrez la description" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Lieu</Form.Label>
          <Form.Control type="text" placeholder="Entrez le lieu" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date de début</Form.Label>
          <Form.Control type="date" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Heure de début</Form.Label>
          <Form.Control type="time" placeholder="" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date de fin</Form.Label>
          <Form.Control type="date" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Heure de fin</Form.Label>
          <Form.Control type="time" placeholder="" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Programme</Form.Label>
          <Form.Control type="text" placeholder="Entrez le programme..." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" placeholder="Ajoutez une image" />
        </Form.Group>
      </Row>

      <Button variant="danger" type="submit">Enregister</Button>
      <Button variant="secondady" type="reset">Annuler</Button>

    </Form>
  )
}

export default Newevent