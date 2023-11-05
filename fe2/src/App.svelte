<script>
// @ts-nocheck

  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Crossword from "svelte-crossword"
  import CrosswordSettings from './CrosswordSettings.svelte';
  import {Col, Container, Row} from "sveltestrap";
  import eventBus from './eventBus';
  /*const data = [
    {"answer": "NASSE", "direction": "across", "clue": "Wetness in Wiesbaden", "x": 0, "y": 0}, {"answer": "MADEASALE", "direction": "across", "clue": "Closed a deal, perhaps", "x": 6, "y": 0}, {"answer": "OREES", "direction": "across", "clue": "Jamb closings", "x": 0, "y": 1}, {"answer": "AIRYTALES", "direction": "across", "clue": "Light yarns (wordplay)", "x": 6, "y": 1}, {"answer": "SERET", "direction": "across", "clue": "Ukrainian river.", "x": 0, "y": 2}, {"answer": "TALLGLASS", "direction": "across", "clue": "Container for a 117-Across", "x": 6, "y": 2}, {"answer": "EAAIEEE", "direction": "across", "clue": "Giant coral structure off the coast of Australia (5 7 4)", "x": 0, "y": 3}, {"answer": "MESSE", "direction": "across", "clue": "Gounods  Solenelle", "x": 10, "y": 3}, {"answer": "EES", "direction": "across", "clue": "High-charged Barus and Holly denizens", "x": 0, "y": 4}, {"answer": "EERASE", "direction": "across", "clue": "Expunge", "x": 4, "y": 4}, {"answer": "EVES", "direction": "across", "clue": "Want-ad times", "x": 11, "y": 4}, {"answer": "AEAIEEIA", "direction": "across", "clue": "Nonmainstream magazines, TV networks, websites, and such", "x": 3, "y": 5}, {"answer": "ERS", "direction": "across", "clue": "Hospital crisis areas abbreviation", "x": 12, "y": 5}, {"answer": "ESSES", "direction": "across", "clue": "A lot of sissies", "x": 0, "y": 6}, {"answer": "AETES", "direction": "across", "clue": "Fleece keeper gets set back by Irish poet", "x": 6, "y": 6}, {"answer": "GAE", "direction": "across", "clue": "Go, in Scotland. ", "x": 12, "y": 6}, {"answer": "SHTETEL", "direction": "across", "clue": "Fiddler on the Roof village, for example", "x": 0, "y": 7}, {"answer": "TSTRAPS", "direction": "across", "clue": "Vamp attachments", "x": 8, "y": 7}, {"answer": "SIE", "direction": "across", "clue": "It can mean \"she,\" \"you,\" or \"they\"", "x": 0, "y": 8}, {"answer": "ELIAH", "direction": "across", "clue": "Religious leader Muhammad (Var.)", "x": 4, "y": 8}, {"answer": "OASES", "direction": "across", "clue": "Saharan spots ", "x": 10, "y": 8}, {"answer": "EPR", "direction": "across", "clue": "___ paradox (direct challenge to the \"Copenhagen interpretation\" of quantum physics); Abbreviation", "x": 0, "y": 9}, {"answer": "RESTEELS", "direction": "across", "clue": "Prepares for another challenge ", "x": 4, "y": 9}, {"answer": "SSES", "direction": "across", "clue": "Compass points.", "x": 0, "y": 10}, {"answer": "SEESEE", "direction": "across", "clue": "Partridge of India.", "x": 5, "y": 10}, {"answer": "ESF", "direction": "across", "clue": "Tampa school", "x": 12, "y": 10}, {"answer": "SMOER", "direction": "across", "clue": "Burn slowly", "x": 0, "y": 11}, {"answer": "CANTSEE", "direction": "across", "clue": "Fails to get", "x": 8, "y": 11}, {"answer": "EASTEREVE", "direction": "across", "clue": "Night before an important Christian festival", "x": 0, "y": 12}, {"answer": "OESAR", "direction": "across", "clue": "Ridge of glacial gravel variable", "x": 10, "y": 12}, {"answer": "STEAMOPEN", "direction": "across", "clue": "Unseal furtively, in a way", "x": 0, "y": 13}, {"answer": "NESIA", "direction": "across", "clue": "Indo or Poly ending", "x": 10, "y": 13}, {"answer": "SETSASIDE", "direction": "across", "clue": "Reserves.", "x": 0, "y": 14}, {"answer": "ESERE", "direction": "across", "clue": "Chemical alkaloid", "x": 10, "y": 14}, {"answer": "NOSEE", "direction": "down", "clue": "um gnat", "x": 0, "y": 0}, {"answer": "ESSESSESS", "direction": "down", "clue": "Draft group, for long", "x": 0, "y": 6}, {"answer": "AREAE", "direction": "down", "clue": "Cerebral regions.", "x": 1, "y": 0}, {"answer": "SHIPSMATE", "direction": "down", "clue": "Anchorman (wordplay)", "x": 1, "y": 6}, {"answer": "SERAS", "direction": "down", "clue": "Large baskets in Bilbao", "x": 2, "y": 0}, {"answer": "STEREOSET", "direction": "down", "clue": "Equipment for LP's", "x": 2, "y": 6}, {"answer": "SEEI", "direction": "down", "clue": "Rush Limbaugh book \"___ Told You So\"", "x": 3, "y": 0}, {"answer": "AEE", "direction": "down", "clue": "Aeronautical eng. ", "x": 3, "y": 5}, {"answer": "SETAS", "direction": "down", "clue": "Put at, as a price", "x": 3, "y": 10}, {"answer": "ESTEEESTER", "direction": "down", "clue": "Cosmetics compound (wordplay)", "x": 4, "y": 0}, {"answer": "REMA", "direction": "down", "clue": "Send back", "x": 4, "y": 11}, {"answer": "EEA", "direction": "down", "clue": "Itchy skin condition", "x": 5, "y": 3}, {"answer": "ELES", "direction": "down", "clue": "Morays Var. ", "x": 5, "y": 7}, {"answer": "ROS", "direction": "down", "clue": "Author Asquith of children's books", "x": 5, "y": 12}, {"answer": "MATERIALISE", "direction": "down", "clue": "Happen to beat Israeli team", "x": 6, "y": 0}, {"answer": "EPI", "direction": "down", "clue": "Prefix with gram and log. ", "x": 6, "y": 12}, {"answer": "AIA", "direction": "down", "clue": "Organization for Saarinen", "x": 7, "y": 0}, {"answer": "AEE", "direction": "down", "clue": "Novelist James", "x": 7, "y": 4}, {"answer": "ATE", "direction": "down", "clue": "Thanks, I already ___.", "x": 7, "y": 8}, {"answer": "VED", "direction": "down", "clue": "Indian writer Mehta", "x": 7, "y": 12}, {"answer": "DRL", "direction": "down", "clue": "Common DC license letters", "x": 8, "y": 0}, {"answer": "SETTHESCENE", "direction": "down", "clue": "Give background information", "x": 8, "y": 4}, {"answer": "EYL", "direction": "down", "clue": "Steve on 1987 Hoosier NCAA title team", "x": 9, "y": 0}, {"answer": "EIES", "direction": "down", "clue": "Decade in which MTV began", "x": 9, "y": 4}, {"answer": "EEA", "direction": "down", "clue": "Itchy skin condition", "x": 9, "y": 9}, {"answer": "ATGM", "direction": "down", "clue": "These, overseas", "x": 10, "y": 0}, {"answer": "ASTOLENONE", "direction": "down", "clue": "End of the quotation", "x": 10, "y": 5}, {"answer": "SALEE", "direction": "down", "clue": "Salted: Fr.", "x": 11, "y": 0}, {"answer": "RAS", "direction": "down", "clue": "Dorm monitors, for short", "x": 11, "y": 7}, {"answer": "TEES", "direction": "down", "clue": "River of northern England", "x": 11, "y": 11}, {"answer": "ALASVEGAS", "direction": "down", "clue": "Sigh of regret for bygone Chevys (wordplay)", "x": 12, "y": 0}, {"answer": "ESSSE", "direction": "down", "clue": "Actual, after 'in'", "x": 12, "y": 10}, {"answer": "LESSERAPE", "direction": "down", "clue": "Gibbon", "x": 13, "y": 0}, {"answer": "SEAIR", "direction": "down", "clue": "Its said to be salubrious", "x": 13, "y": 10}, {"answer": "ESSESSESS", "direction": "down", "clue": "Draft group, for long", "x": 14, "y": 0}, {"answer": "FERAE", "direction": "down", "clue": "The Carnivores. ", "x": 14, "y": 10}
  ]*/
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
  <Container fluid={true}>
    <Row>
      <Col md={4} lg={3}>
        <Crossword data={data} showKeyboard={false}/>
      </Col>
    </Row>
    <Row>
      <Col md={4} lg={3}>
        <CrosswordSettings />
      </Col>
    </Row>
      
    
  </Container>
</main>

<style>
</style>
