from handlers.BaseHandlers import BaseHandler


class MainHandler(BaseHandler):

    def get(self, *args, **kwargs):
        self.render('main.html')
