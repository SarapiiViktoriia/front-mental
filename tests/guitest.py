from sys import stdin, stdout
from unittest import main, TestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
def click_menu(driver, menu):
	element = driver.find_element(By.LINK_TEXT, menu)
	element.click()
def click_instance(driver, instance):
	s = "//*[contains(text(), '"+instance.replace("_", " ")+"')]"
	time.sleep(2)
	element = driver.find_element(By.XPATH, s)
	element.click()
def click_class(driver, c):
	time.sleep(1)
	element = driver.find_element(By.CLASS_NAME, c)
	element.click()
def page_forward(driver):
	time.sleep(1)
	element = driver.find_element(By.CLASS_NAME, "bx--pagination__button--forward")	
	element.click()
def filter(driver):
	time.sleep(1)
	element = driver.find_element(By.CLASS_NAME, "filter-button")
	element.click()
def search(driver, text):
	time.sleep(1)
	element = driver.find_element(By.CLASS_NAME, "bx--search-input")
	element.click()
	element.send_keys(text)
	element.send_keys(Keys.ENTER)
if __name__ == "__main__":
	for s in stdin:
		commands = s.split()
		driver = webdriver.Chrome()
		driver.get("http://www.mentalhelp.me/")
		passed = True
		for c in commands:
			try:
				if c[0:2] == "m_":
					click_menu(driver, c[2:])
				elif c[0:2] == "i_":
					click_instance(driver, c[2:])
				elif c[0:2] == "c_":
					click_class(driver, c[2:])
				elif c == "f_":
					page_forward(driver)
				elif c[0:2] == "s_":
					search(driver, c[2:])
				elif c == "fi":
					filter(driver)
				else:
					stdout.write(s[:-1]+" - Bad test\n")
					passed = False
					break
			except:
				stdout.write(s+" - Fail\n")
				passed = False
				break
		if passed:
			if s[-1:] == "\n":
				stdout.write(s[:-1]+" - Pass\n")
			else:
				stdout.write(s+" - Pass\n")
		driver.close()
