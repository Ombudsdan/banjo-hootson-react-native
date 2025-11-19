Get-Content .env | ForEach-Object {
  if ($_ -match '^\s*#') { return }
  if ($_ -match '^\s*$') { return }
  $parts = $_ -split '=', 2
  if ($parts.Length -eq 2) {
    $key = $parts[0].Trim()
    $val = $parts[1].Trim()
    if ($key -eq 'JAVA_HOME') { $env:JAVA_HOME = $val }
    if ($key -eq 'ANDROID_HOME') { $env:ANDROID_HOME = $val }
  }
}

if ($env:JAVA_HOME) {
  $env:PATH = "$env:JAVA_HOME\bin;$env:PATH"
}
if ($env:ANDROID_HOME) {
  $env:PATH = "$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\emulator;$env:PATH"
}