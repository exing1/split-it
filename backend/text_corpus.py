class TextCorpus():
    """
    a text corpus is just a collection of BoundingBox
    and includes methods to process the words
    """
    def __init__(self, words_list, y_delta=40, min_confidence=0.5):
        """
        args:
            words_list: a list of BoundingBox
            y_delta: the max distance between two words to be considered in the same line
        """
        self.words_list = words_list
        self.y_delta = y_delta
        self.min_confidence = min_confidence
    
    def filter_by_confidence(self):
        """
        filters out the words with low confidence
        """
        self.words_list = [word for word in self.words_list if word.confidence > self.min_confidence]
    
    def get_lines(self):
        """
        returns a list of lines, where each line is a list of BoundingBox that we think are in the same y position
        """
        # sort the words by y coordinate
        self.words_list.sort(key=lambda word: word.get_center()[1])
        # create the lines
        lines = []
        for word in self.words_list:
            # check if the word is in the same line as the last word
            if len(lines) == 0 or abs(lines[-1][-1].get_center()[1] - word.get_center()[1]) > self.y_delta:
                # create a new line
                lines.append([word])
            else:
                # add to the last line
                lines[-1].append(word)
        return lines
    
    def print_lines(self, lines):
        """
        prints the lines
        """
        for line in lines:
            print(" ".join([word.text for word in line]))
