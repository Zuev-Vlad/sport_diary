enum methodType {
    get = 'GET',
    put = 'PUT',
    post = 'POST',
    delete = 'DELETE',
}
interface fetchParams {
    method: keyof typeof methodType,
    headers: any,
    body?: any
}

export class CustomFetch {

    protected myFetch(
        url: string,
        method: keyof typeof methodType = 'get',
        contentType: string = 'application/json',
        body?: any,
    ) {
        const params: fetchParams = {
            method,
            headers: {
                'Content-Type': contentType
            },
        }
        if (method == 'post') {
            params.body = body
        }

        return fetch(url, params)
    }


    public GET(url: string) {
        return this.myFetch(url)
    }

    public POST(url: string, body: any, contentType: string = 'application/json') {
        return this.myFetch(url, 'post', contentType, body)
    }

    public DELETE(url: string) {
        return this.myFetch(url, 'delete')
    }

    public PUT(url: string, body: any, contentType: string = 'application/json') {
        return this.myFetch(url, 'post', contentType, body)
    }

}