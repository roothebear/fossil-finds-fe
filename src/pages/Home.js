import FindsIcons from "../components/collections/FindsIcons";
import styles from "./Pages.module.css";

export default function Home({ finds }) {
  return (
    <main>
      <header className={styles.home_section} id="home_header">
        <h1 className="h1_light">
          The UK's open source fossil find database for everyone!
        </h1>
      </header>
      <section className={styles.home_section} id="">
        <h1>What is Fossil Finds?</h1>
        <p>
          We love fossils just as much as you, and want to make it easier for
          people to store and share their awesome finds!
        </p>
        <br />
        <p>
          On Fossil Finds you can find out about all sorts of fossils found
          across the UK.
        </p>
        <br />
        <p>
          Create an account to share your own fossil finds, and leave comments
          for other fossil hunters on their finds!
        </p>
      </section>
      <section className={styles.home_section}>
        <h1 className="">Recent Finds</h1>
        <FindsIcons finds={finds} />
      </section>
    </main>
  );
}
