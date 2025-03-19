import AppLayout from "@/layout/AppLayout"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Bag from '../assets/bag.png'
import Cap from '../assets/cap.png'
import Dino from '../assets/chrome-dino-figurine.png'
import Plushie from '../assets/go-plushie.png'
import Hoodie from '../assets/hoodie.png'
import Lanyard from '../assets/lanyard-white.png'
import Magnet from '../assets/magnet.png'
import Socks from '../assets/socks.png'
import Sweatshirt from '../assets/sweatshirt.png'

const products = [
  {
    "src": Bag,
    "alt": "Bag picture",
    "name": "Bag"
  },
  {
    "src": Cap,
    "alt": "Cap picture",
    "name": "Cap"
  },
  {
    "src": Dino,
    "alt": "Dino picture",
    "name": "Dino"
  },
  {
    "src": Plushie,
    "alt": "Go Plushie picture",
    "name": "Go Plushie"
  },
  {
    "src": Hoodie,
    "alt": "Hoodie picture",
    "name": "Hoodie"
  },
  {
    "src": Lanyard,
    "alt": "Lanyard picture",
    "name": "Lanyard"
  },
  {
    "src": Magnet,
    "alt": "Magnet picture",
    "name": "Magnet"
  },
  {
    "src": Socks,
    "alt": "Socks picture",
    "name": "Socks"
  },
  {
    "src": Sweatshirt,
    "alt": "Sweatshirt picture",
    "name": "Sweatshirt"
  }
]

const App = () => {
  return (
    <AppLayout>
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {
          products.map((item, key) => {
            return (
              <Card key={key}>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </CardContent>
                <CardFooter className=" flex justify-end">
                  <Button className="bg-gray-800 hover:cursor-pointer">Buy!</Button>
                </CardFooter>
              </Card>
            )
          })
        }
      </div>
    </AppLayout>
  )
}

export default App