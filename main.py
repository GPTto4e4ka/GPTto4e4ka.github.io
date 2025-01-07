import aiohttp_jinja2
import jinja2
import aiohttp
from aiohttp import web
from aiohttp.web import FileResponse
import asyncio

app = web.Application()  # Инициализируем приложение
aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader('templates'))  # Инициализируем шаблонизатор
routes = web.RouteTableDef()
HOST = 'localhost'
PORT = 8080
temp = aiohttp_jinja2.render_template


@routes.get('/')
async def get_handler(request: web.Request):  # Страница управления
    # Форматируем выво
    return temp('index.html', request, {})

app.add_routes(routes)  # Инициализируем пути
app.router.add_static('/css/', path='static/css', name='css')
app.router.add_static('/img/', path='static/img', name='img')
app.router.add_static('/js/', path='static/js', name='js')
app.router.add_static('/fonts/', path='static/fonts', name='fonts', show_index=True)


if __name__ == '__main__':
    web.run_app(app, port=PORT, host=HOST)
