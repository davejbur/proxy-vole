function FindProxyForURL(url, host)
{
    return "PROXY  my-proxy.com:80 ; PROXY my-proxy2.com: 8080; PROXY my-proxy3.com :8080; PROXY my-proxy4.com ;";
}