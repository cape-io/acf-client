import React from 'react'

export default function DevTools() {
  return <span style={{ display: 'none' }}>`Production Build v${process.env.APP_VERSION}`</span>
}
