//import {...} from '../styles/globals'
//use framer motion
//https://ghibliapi.herokuapp.com/
//https://github.com/public-apis/public-apis

/*

{
"id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
"title": "Castle in the Sky",
"original_title": "天空の城ラピュタ",
"original_title_romanised": "Tenkū no shiro Rapyuta",
"description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
"director": "Hayao Miyazaki",
"producer": "Isao Takahata",
"release_date": "1986",
"running_time": "124",
"rt_score": "95",
"people": [],
"species": [],
"locations": [],
"vehicles": [],
"url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
}

*/

import { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

import { motion } from 'framer-motion';
import axios from 'axios';

export default function Ghibli() {

  const [movies, setMovies] = useState([]);
  const [sel, setSel] = useState(null);

  const GetMovies = async () => {
    const result = await axios.get('https://ghibliapi.herokuapp.com/films');
    setMovies([
      ...result.data
    ]);
  }

  return <div>
    <button onClick={GetMovies}>Get Movies</button>

    {movies.map((o, i) => (
      <motion.div
        onClick={()=>setSel(i)}
        style={{position:"absolute", left:0, top:100*i}}
        key={o.id}
        initial={
          { x: -300 }
        }
        animate={
          { x: sel===i ? 300 : 0 }
        }
        transition={{
          duration: 1,
          delay: sel!=null ? 0 : 1 * i
        }}
      >
        <Card >
          <Image src={o.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{o.title}</Card.Header>
            <Card.Meta>
              <span className='date'>{o.original_title}</span>
            </Card.Meta>
            <Card.Description>
              {o.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {o.producer} / {o.director}
            </a>
          </Card.Content>
        </Card>
      </motion.div>
    ))}
  </div>
}