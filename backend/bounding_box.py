class BoundingBox():
    """
    a bounding box object for a detected text
    includes the position of the box, the text, and the recognition confidence
    """
    def __init__(self, a, b, c, d, text, confidence):
        """
        args: the 4 points of the box, and each point is a tuple (x, y)
                the box is like this:
                    d ---- c
                    |      |
                    a ---- b
        """
        # vars
        self.a = a
        self.b = b
        self.c = c
        self.d = d
        self.text = text
        self.confidence = confidence
        # calculate some stats
        self.width = self.b[0] - self.a[0]
        self.height = self.d[1] - self.a[1]
        self.center = ((self.a[0] + self.b[0]) / 2, (self.a[1] + self.d[1]) / 2)
    
    def print_stats(self):
        print(f"word: {self.text}, center: {self.center}, confidence: {self.confidence}")

    def get_center(self):
        return self.center

