import Container from '@/components/Container';
import Header from '@/components/Header';
import { createFileRoute } from '@tanstack/react-router'
import ReactMarkdown from "react-markdown";
import ky from 'ky'


export const Route = createFileRoute('/legal/cookies')({
  loader: async () => {
    const response = await ky.get('/content/CookiePolicy.md').text();
    return { markdown: response }
  },
  component: function CookiePolicy() {

    const { markdown } = Route.useLoaderData()

    return (
      <>
        <Header title='We Love Coffee And all the people who make it' />

        <Container padding>
          <div className="prose">
            <ReactMarkdown children={markdown} />
          </div>
        </Container>
      </>
    )
  }
})
