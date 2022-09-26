import { Button, Loader, Dimmer, Segment, Card, Icon, Image, Flag } from 'semantic-ui-react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import styled from 'styled-components'

const MyDeleteIcon = styled(DeleteIcon)`
    width: 100px;
    height: 100px;
    background-color:#DDA;
    border-radius: 50%;
    padding: 10px;
`

export default function Sem_Play_Test(){

    return <div>Hi
        <Button>Click me to begin</Button>
        <Segment>
            <Dimmer active>
            <Loader />
            </Dimmer>
         </Segment>
    

    <Card onClick={(event, data)=>console.log(data)}>
    <Image src='http://placekitten.com/500/500' wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        <Tooltip title="Hi this is my name">
            <div>
        Matthew <Flag name="south korea" /></div>
        </Tooltip>
        </Card.Header>
        
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    
  </Card>


  <Tooltip title="Iss mine!">
      <IconButton onClick={()=>alert(`deletes`)}>
        <MyDeleteIcon />
      </IconButton>
    </Tooltip>
    </div>
}