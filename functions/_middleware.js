addEventListener('fetch', event => {
      const originalRequest = event.request;

        const modifiedRequest = new Request(originalRequest, {
            cf: {
                  resolveOverride: 'srv-cdn.solver.net.co'
                      }
                        });

                          event.respondWith(fetch(modifiedRequest));
                          });
