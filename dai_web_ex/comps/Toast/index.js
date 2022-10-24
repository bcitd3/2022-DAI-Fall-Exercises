//use framer motion and timeout
import { Message } from 'semantic-ui-react'
import { motion } from 'framer-motion';


export default function Toast({
header="This is a header",
content="This is a content"

}){
  return <motion.div
              style={{textAlign: "center", marginTop: 100}}
              initial={{ opacity: 0, scale: 1, x:-475, y:-150 }}
              animate={{ opacity: 1, scale: 1, x:-475, y:-100}}
              transition={{ duration: 0.3 }}>
    <Message
    compact
    header={header}
    content={content}
  />
  </motion.div>
}