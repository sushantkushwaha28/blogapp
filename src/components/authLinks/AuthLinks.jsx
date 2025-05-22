import React from 'react'
import Link from 'next/link'
import styles from './AuthLinks.module.css'
const AuthLinks = () => {

  const status ="not-authenticated"
  return (
    <>
    {status === "not-authenticated" ? (
      <Link href="/login">Login</Link>
    ):(
      <>
      <Link href="/write">Write</Link>
      <span className={styles.link}> Logout </span>
      </>
    )}

    </>
  )
}

export default AuthLinks