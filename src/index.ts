import { Hono } from 'hono'
import { otp } from './utils/otp';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!')
});

app.post('/generate-otp', async (c) => {
  const email = await c.req.parseBody();
  console.log(email)
  if (!email) {
    return c.json({ error: 'Email is required' }, 400)
  }

  // save email and otp in db
  // send otp to email
  // 

  return c.json({
    message: 'OTP is generated'
  })
})

app.post('/verify-otp', async (c) => {
  const { otp, email } = await c.req.parseBody();
  console.log(otp, email)
  if (!otp || !email) {
    return c.json({ error: 'OTP and Email are required' }, 400)
  }

  return c.json({
    message: 'OTP is verified'
  })
});

app.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.text(`Hello Hono! ${id}`)
});

export default app
