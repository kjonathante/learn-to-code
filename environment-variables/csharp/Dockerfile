FROM microsoft/dotnet:2.1-sdk
ENV BAR production
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o out
ENTRYPOINT ["dotnet", "out/root.dll"]