f:\
cd F:\GIT\handu0377\handu0377\index.php\
for /l %%d in (1 1 20) do (
md %%d
cd F:\GIT\handu0377\handu0377\index.php\
wget -O "F:\GIT\handu0377\handu0377\index.php\%%d\index.html" http://handu0377.com/index.php/%%d/
)
pause