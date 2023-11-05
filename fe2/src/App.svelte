<script>
// @ts-nocheck

  import Crossword from "./svecro/Crossword.svelte"
  import CrosswordSettings from './CrosswordSettings.svelte';
  import {Col, Container, Row} from "sveltestrap";
  import eventBus from './eventBus';
  let data;
  fetch(`https://cheesehacks.onrender.com/getCross?difficulty=Hard&seed=4`).then((response) => response.json()).then(
    (result) => {      
      data = result;
    }
  );

  eventBus.on('reactDOMChange', (newData) => {
    data = newData;
  })
</script>

<main>
  <Container>
    <Row>
      <div>
        <Col md={4} lg={3}>
          <Crossword data={data} showKeyboard={false} breakpoint={0}/>
        </Col>
      </div>
    </Row>
  </Container>
</main>

<style>
</style>
