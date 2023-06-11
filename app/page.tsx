import styles from './styles.module.css';
import Image from 'next/image';

export default function Page() {
  return (

    <html>

      <head>
        <title>Pokedex da ThinkLess</title>
      </head>

      <body className={styles.body}>

        <div className={styles.Titulo}>
          <h1 className={styles.h1}>Pokedex</h1>
        </div>

        <div className={styles.BarraDePesquisa}>
          <input type="text" id="txtBusca" placeholder="Procure um Pokemon..." />
          <button id="btnBusca">Buscar</button>
        </div>

        <div className={styles.Biblioteca}>

          <div className={styles.Pokemon}>
            <h2>Pikachu</h2>
            <p><Image src="/Imagens/GO_Electrico.png" alt="IconEletrico" width={30} height={25}></Image></p>
            <Image src="/Imagens/pikachu.png" alt="Pikachu" width={100} height={80}></Image>
            <p className={styles.Eletrico}>Elétrico</p>
            <button>Evoluções</button>
          </div>

          <div className={styles.Pokemon}>
            <h2>Squirtle</h2>
            <p><Image src="/Imagens/GO_Agua.png" alt="IconAgua" width={30} height={25}></Image></p>
            <Image src="/Imagens/squirtle.png" alt="Squirtle" width={100} height={80}></Image>
            <p className={styles.Aquatico}>Aquático</p>
            <button>Evoluções</button>
          </div>

          <div className={styles.Pokemon}>
            <h2>Charmander</h2>
            <p><Image src="/Imagens/GO_Fogo.png" alt="IconFogo" width={30} height={25}></Image></p>
            <Image src="/Imagens/charmander.png" alt="Charmander" width={100} height={80}></Image>
            <p className={styles.Fogo}>Fogo</p>
            <button>Evoluções</button>
          </div>

          <div className={styles.Pokemon}>
            <h2>Pidguey</h2>
            <p><Image src="/Imagens/GO_Voador.png" alt="IconVoador" width={30} height={25}></Image></p>
            <Image src="/Imagens/pidgey.png" alt="Pidguey" width={100} height={80}></Image>
            <p className={styles.Voador}>Voador</p>
            <button>Evoluções</button>
          </div>

          <div className={styles.Pokemon}>
            <h2>Machop</h2>
            <p><Image src="/Imagens/GO_Lutador.png" alt="IconLutador" width={30} height={25}></Image></p>
            <Image src="/Imagens/machop.jfif" alt="Machop" width={100} height={80}></Image>
            <p className={styles.Lutador}>Lutador</p>
            <button>Evoluções</button>
          </div>

          <div className={styles.Pokemon}>
            <h2>Growlithe</h2>
            <p><Image src="/Imagens/GO_Fogo.png" alt="IconFogo" width={30} height={25}></Image></p>
            <Image src="/Imagens/growlithe.jfif" alt="Growlithe" width={100} height={80}></Image>
            <p className={styles.Fogo}>Fogo</p>
            <button>Evoluções</button>
          </div>

        </div>

      </body>
    </html >

  )
}