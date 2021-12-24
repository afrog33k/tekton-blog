FROM clojure:openjdk-11-lein as builder

WORKDIR /app

RUN \
apt-get update && \
apt-get install -y jq curl wget unzip && \
export CRYOGEN=$(curl -sL https://api.github.com/repos/cryogen-project/cryogen/releases/latest | jq -r '.zipball_url') && \
wget -O cryogen.zip $(echo $CRYOGEN) && \
unzip cryogen.zip && \
rm cryogen.zip && \
mv cryogen* cryogen && \
cd cryogen && \
lein deps

COPY . /app/.

RUN lein run

FROM httpd:latest
COPY --from=builder /app/public/ /usr/local/apache2/htdocs/
