FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine3.18 AS builder
WORKDIR /build
COPY . .
RUN apk update
RUN apk add nodejs-current npm
WORKDIR /build/FrontEnd
RUN npm install
WORKDIR /build
RUN dotnet publish --configuration Release --output publish
FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine3.18 AS final
WORKDIR /app
COPY --from=builder /build/publish .
EXPOSE 80
ENV ASPNETCORE_ENVIRONMENT=Development
ENV ASPNETCORE_HTTP_PORTS=80
ENTRYPOINT [ "dotnet", "MSAL2024API.dll" ]