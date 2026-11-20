import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const REPO = 'https://github.com/icloud-calendar-mcp/icloud-calendar-mcp';
const APP_PASSWORD = 'https://support.apple.com/en-us/HT204397';

const config = (command: string, args: string[]) =>
  JSON.stringify(
    {
      mcpServers: {
        'icloud-calendar': {
          command,
          args,
          env: {ICLOUD_USERNAME: 'your-apple-id@icloud.com', ICLOUD_PASSWORD: 'your-app-specific-password'},
        },
      },
    },
    null,
    2,
  );

type Ask = {say: string; does: string};

const ASKS: Ask[] = [
  {say: 'What’s on my calendar this week?', does: 'Reads this week’s events from your calendars.'},
  {say: 'Create a meeting with John tomorrow at 2pm.', does: 'Adds the event, with a reminder if you ask for one.'},
  {say: 'Move my 3pm meeting to 4pm.', does: 'Changes the time. The rest of the event stays the same.'},
  {say: 'Add soccer practice every Tuesday at 5 until June.', does: 'Adds it as one repeating event.'},
];

type Tool = {name: string; does: string; changes: string};

const TOOLS: Tool[] = [
  {name: 'list_calendars', does: 'Lists your calendars.', changes: 'No'},
  {name: 'get_events', does: 'Reads the events in a date range.', changes: 'No'},
  {name: 'create_event', does: 'Adds an event, all-day or timed, repeating or not.', changes: 'Adds'},
  {name: 'update_event', does: 'Changes an event: one occurrence, this and later, or the whole series.', changes: 'Changes'},
  {name: 'delete_event', does: 'Deletes an event: one occurrence, this and later, or the whole series.', changes: 'Deletes'},
];

type Tile = {title: string; body: string};

const TILES: Tile[] = [
  {title: 'No Mac needed', body: 'Runs on Windows, macOS, or Linux with Java 21.'},
  {title: 'Handles repeating events', body: 'Change one date, that date and the rest, or the whole series.'},
  {title: 'Won’t overwrite newer edits', body: 'If the event changed after your AI read it, the edit stops and says so.'},
  {title: 'No silent cut-offs', body: 'Ask for too much at once and it says so, instead of showing part of the list.'},
];

function Hero(): ReactNode {
  return (
    <header className="mc-hero">
      <div className="container mc-hero__inner">
        <div>
          <Heading as="h1" className="mc-hero__title">
            Ask AI to plan
            <br />
            your week.
          </Heading>
          <p className="mc-hero__lead">
            Connect your AI assistant to iCloud Calendar. It checks, adds, and moves events when you ask.
          </p>
          <div className="mc-hero__cta">
            <Link className="mc-btn mc-btn--green" to="/#setup">
              Set it up
            </Link>
            <Link className="mc-btn mc-btn--line" href={REPO}>
              View on GitHub
            </Link>
          </div>
          <p className="mc-hero__note">Free and open source. Needs Java 21 or newer.</p>
        </div>
        <div className="mc-hero__art">
          <img className="mc-hero__kash" src={useBaseUrl('/img/kash/kash-reading.webp')} alt="" width={480} height={458} />
          <img className="mc-hero__paws" src={useBaseUrl('/img/kash/kash-paws.webp')} alt="" width={720} height={176} />
        <div className="mc-hero__term">
          <div className="mc-term__bar" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <CodeBlock language="bash">npx @icloud-calendar-mcp/server</CodeBlock>
          <p className="mc-term__or">or</p>
          <CodeBlock language="bash">uvx icloud-calendar-mcp</CodeBlock>
        </div>
        </div>
      </div>
    </header>
  );
}

function Safety(): ReactNode {
  return (
    <section className="mc-safety">
      <div className="container">
        <Heading as="h2">Never use your Apple ID password.</Heading>
        <p>
          Use an app-specific password. You can revoke it any time, and your Apple ID stays as it is.
        </p>
        <Link href={APP_PASSWORD}>Create an app-specific password</Link>
      </div>
    </section>
  );
}

function Asks(): ReactNode {
  return (
    <section className="mc-section">
      <div className="container">
        <Heading as="h2" className="mc-heading">
          Ask in plain words.
        </Heading>
        <div className="mc-asks">
          {ASKS.map((a) => (
            <figure className="mc-ask" key={a.say}>
              <blockquote>“{a.say}”</blockquote>
              <figcaption>{a.does}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools(): ReactNode {
  return (
    <section className="mc-section mc-section--mist">
      <div className="container">
        <Heading as="h2" className="mc-heading" id="tools">
          What it can do
        </Heading>
        <div className="mc-table-wrap">
          <table className="mc-table">
            <thead>
              <tr>
                <th scope="col">Tool</th>
                <th scope="col">What it does</th>
                <th scope="col">Changes your calendar</th>
              </tr>
            </thead>
            <tbody>
              {TOOLS.map((t) => (
                <tr key={t.name}>
                  <td>
                    <code>{t.name}</code>
                  </td>
                  <td>{t.does}</td>
                  <td>{t.changes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mc-more">
          It also has the <code>calendar://calendars</code> resource and three ready-made prompts:{' '}
          <code>schedule_meeting</code>, <code>reschedule</code>, and <code>find_conflicts</code>.{' '}
          <Link href={`${REPO}#tool-parameters`}>See every parameter</Link>
        </p>
      </div>
    </section>
  );
}

function Why(): ReactNode {
  return (
    <section className="mc-section">
      <div className="container">
        <Heading as="h2" className="mc-heading">
          Why this server
        </Heading>
        <div className="mc-tiles">
          {TILES.map((t) => (
            <div className="mc-tile" key={t.title}>
              <Heading as="h3">{t.title}</Heading>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Setup(): ReactNode {
  return (
    <section className="mc-section mc-section--mist">
      <div className="container">
        <Heading as="h2" className="mc-heading" id="setup">
          Set it up in three steps.
        </Heading>
        <ol className="mc-steps">
          <li>
            <Heading as="h3">Install Java 21 or newer</Heading>
            <p>npx and uvx need it too: they run the same Java build.</p>
          </li>
          <li>
            <Heading as="h3">Create an app-specific password</Heading>
            <p>
              <Link href={APP_PASSWORD}>Create one for your Apple ID</Link>.
            </p>
          </li>
          <li>
            <Heading as="h3">Add the server to your AI app</Heading>
            <p>
              Put this in your MCP client’s configuration, with your iCloud email address and the new password.
              In Claude Desktop the file is <code>claude_desktop_config.json</code>: in{' '}
              <code>~/Library/Application Support/Claude/</code> on macOS, <code>~/.config/claude/</code> on
              Linux, and <code>%APPDATA%\Claude\</code> on Windows.
            </p>
            <Tabs groupId="install">
              <TabItem value="npm" label="npm" default>
                <CodeBlock language="json">{config('npx', ['@icloud-calendar-mcp/server'])}</CodeBlock>
              </TabItem>
              <TabItem value="uvx" label="uvx (Python)">
                <CodeBlock language="json">{config('uvx', ['icloud-calendar-mcp'])}</CodeBlock>
              </TabItem>
              <TabItem value="jar" label="JAR">
                <CodeBlock language="json">{config('java', ['-jar', '/path/to/icloud-calendar-mcp-all.jar'])}</CodeBlock>
                <p className="mc-small">
                  Download <code>icloud-calendar-mcp-all.jar</code> from the{' '}
                  <Link href={`${REPO}/releases/latest`}>latest release</Link>.
                </p>
              </TabItem>
            </Tabs>
            <p>Restart the app and ask: “Show me all my calendars.”</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Security(): ReactNode {
  return (
    <section className="mc-section">
      <div className="container">
        <Heading as="h2" className="mc-heading" id="security">
          Your calendar stays between you and iCloud.
        </Heading>
        <p className="mc-lead">
          The server runs on your computer and talks only to iCloud. No telemetry. Your password stays in an
          environment variable and never appears in logs or error messages.
        </p>
        <ul className="mc-checks">
          <li>282 security tests, covering the OWASP MCP Top 10.</li>
          <li>Rate limits: 60 reads and 20 writes a minute.</li>
          <li>Blocks requests to internal network addresses.</li>
          <li>Reports every add, change, and delete to your AI app’s log.</li>
        </ul>
        <p className="mc-more">
          <Link href={`${REPO}/blob/main/SECURITY.md`}>Security policy and how to report a vulnerability</Link>
        </p>
      </div>
    </section>
  );
}

function Help(): ReactNode {
  return (
    <section className="mc-section mc-section--mist">
      <div className="container">
        <Heading as="h2" className="mc-heading">
          Common problems
        </Heading>
        <div className="mc-tiles">
          <div className="mc-tile">
            <Heading as="h3">Sign-in fails</Heading>
            <p>Use an app-specific password, and your full iCloud email address as the user name.</p>
          </div>
          <div className="mc-tile">
            <Heading as="h3">A new event doesn’t show yet</Heading>
            <p>iCloud can take a moment to list it. Ask again shortly.</p>
          </div>
          <div className="mc-tile">
            <Heading as="h3">A range is too wide</Heading>
            <p>Ask for a week or a month at a time. One request returns at most 1,000 events.</p>
          </div>
          <div className="mc-tile">
            <Heading as="h3">Something else</Heading>
            <p>
              See <Link href={`${REPO}#troubleshooting`}>troubleshooting</Link>, or{' '}
              <Link href={`${REPO}/issues`}>open an issue</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Connect AI to your iCloud Calendar"
      description="An MCP server that lets AI assistants read and change your iCloud Calendar over CalDAV. Runs on your computer, talks only to iCloud. Free and open source.">
      <Hero />
      <main>
        <Safety />
        <Asks />
        <Tools />
        <Why />
        <Setup />
        <Security />
        <Help />
      </main>
    </Layout>
  );
}
