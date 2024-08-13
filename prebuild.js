import { execSync } from 'child_process'

const platform = process.platform

try {
  if (platform === 'win32') {
    execSync(
      'powershell -Command "(Get-Content .\\node_modules\\.pnpm\\node_modules\\@iconify\\utils\\package.json) | Where-Object {$_ -notmatch \'"\\\\./\\\\*": "\\\\./\\\\*",\' } | Set-Content .\\node_modules\\.pnpm\\node_modules\\@iconify\\utils\\package.json"',
      { stdio: 'inherit' }
    )
    execSync('powershell -Command Write-Host " win:OK " -ForegroundColor DarkGreen -BackgroundColor White', {
      stdio: 'inherit',
    })
  } else {
    execSync('sed -i \'/"\\.\\/\\*": "\\.\\/\\*",/d\' ./node_modules/.pnpm/node_modules/@iconify/utils/package.json', {
      stdio: 'inherit',
    })
    execSync('printf "\\e[32;47m linux/mac:OK \\e[0m"\n', { stdio: 'inherit' })
  }

  execSync('nuxt prepare', { stdio: 'inherit' })
} catch (error) {
  console.error('An error occurred:', error)
  process.exit(1)
}
