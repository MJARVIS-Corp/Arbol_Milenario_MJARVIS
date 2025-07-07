#!/bin/bash
tail -Fn0 /mem/articles/access.log | \
while read line; do
  echo "🧠 [ALERTA] Nueva lectura detectada: $line" >> /interface/console/events.log
done