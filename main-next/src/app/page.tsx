import Banner from "@/components-main/Banner";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Canopy from "@/components-main/Canopy";
import Cargo from "@/components-main/Cargo";
import Accessories from "@/components-main/Accessories";
import Lids from "@/components-main/Lids";
import Footer from "@/components/Footer";
import Motorhome from "@/components-main/Motorhome";
import { promises as fs } from 'fs';

export default async function Home() {
  const filelink = await fs.readFile(process.cwd() + '/src/app/link.json', 'utf8');
  const filelinkcanopy = await fs.readFile(process.cwd() + '/src/app/linkcanopy.json', 'utf8');
  const filelinklids = await fs.readFile(process.cwd() + '/src/app/linklids.json', 'utf8');
  const filelinkacc = await fs.readFile(process.cwd() + '/src/app/linkacc.json', 'utf8');
  const filelinkmenu = await fs.readFile(process.cwd() + '/src/app/linkmenu.json', 'utf8');
  const datalink = JSON.parse(filelink);
  const datalinkcanopy = JSON.parse(filelinkcanopy);
  const datalinklids = JSON.parse(filelinklids);
  const datalinkacc = JSON.parse(filelinkacc);
  const datalinkmenu = JSON.parse(filelinkmenu);
  return (
    <main className={styles.main}>
      <Nav datalinkmenu={datalinkmenu}/>
      <Banner />
      <Canopy datalinkcanopy={datalinkcanopy}/>
      <Cargo />
      <Lids datalinklids={datalinklids}/>
      <Accessories datalinkacc={datalinkacc}/>
      <Motorhome />
      <Footer datalink={datalink}/>
    </main>
  );
}
